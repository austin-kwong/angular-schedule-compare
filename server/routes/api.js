const express = require('express');
const multer = require('multer');
const fs = require('fs');
const upload = multer({ dest: 'uploads/' });
const ical2json = require('ical2json');


const router = express.Router();

const yearToKeep = 2017;


/* GET api listing. */
router.get('/', (req, res) => {
  res.send('api works');
});

router.post('/',upload.single('file'), (req, res) => {
  fs.readFile(req.file.path, function (err, data) {
    if (err) {
      return console.log(err);
    }

    let calendarObject = ical2json.convert(data.toString());
    // console.log(calendarObject.VCALENDAR[0].VEVENT);

    // for (let prop in calendarObject.VCALENDAR.VEVENT){
    //   console.log(prop);
    // }

    let eventPairs = [];
    if(calendarObject.VCALENDAR && calendarObject.VCALENDAR[0]) {
      for (let event of calendarObject.VCALENDAR[0].VEVENT) {
        // console.log(event);
        eventPairs.push({
          "STARTTIME": event["DTSTART;TZID=America/Vancouver"],
          "ENDTIME": event["DTEND;TZID=America/Vancouver"]
        });
      }
      let availability = {
        0: new Array(48).fill(0),
        1: new Array(48).fill(0),
        2: new Array(48).fill(0),
        3: new Array(48).fill(0),
        4: new Array(48).fill(0)
      };


      for (let event of eventPairs) {
        /* each event is in the form { STARTTIME: "<>", ENDTIME: "<>"}*/
        let eventStart = event.STARTTIME;
        let eventEnd = event.ENDTIME;
        let year = eventStart.slice(0, 4);

        let month = parseInt(eventStart.slice(4, 6)) - 1;
        let day = eventStart.slice(6, 8);
        let hours = eventStart.slice(9, 11);
        let minutes = eventStart.slice(11, 13);

        let startDate = new Date(year, month, day, hours, minutes);
        //startDate.setHours(startDate.getHours() - 7);
        // console.log(eventStart);
        // console.log(startDate.toDateString(), startDate.toTimeString());


        if (startDate.getFullYear() != yearToKeep) {
          continue;
        }


        year = eventEnd.slice(0, 4);
        month = parseInt(eventEnd.slice(4, 6)) - 1;
        day = eventEnd.slice(6, 8);
        hours = eventEnd.slice(9, 11);
        minutes = eventEnd.slice(11, 13);

        let endDate = new Date(year, month, day, hours, minutes);
        //endDate.setHours(endDate.getHours() - 7);
        //
        // console.log("StartDate", startDate, " on day: ", startDate.getDay());
        // console.log("EndDate", endDate);
        // populate starting at start time, in 30 minute increments to represent the day
        let beginIndex = (2 * startDate.getHours() + Math.floor(startDate.getMinutes() / 30));
        // console.log("2*startDate.getHours():", 2 * startDate.getHours(), "Math.floor(startDate.getMinutes()/30: ", Math.floor(startDate.getMinutes() / 30));
        let duration = (endDate.getTime() - startDate.getTime()) / (1000 * 60 * 30);
        // console.log("endDate.getTime(): ", endDate.getTime);
        // console.log("startDate.getTime(): ", startDate.getTime());
        // console.log("Populating starting from ", beginIndex, "for duration: ", duration);
        for (let i = 0; i < duration; i++) {
          availability[startDate.getDay() - 1][beginIndex + i] = 1;
        }

      }
      res.send(availability);
    } // guarded for proper format, otherwise return error
    else {
      res.status(500).send('File selected is not a recognized type');
    }
  });

});

module.exports = router;

