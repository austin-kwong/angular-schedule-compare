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
    for (let event of calendarObject.VCALENDAR[0].VEVENT) {
      // console.log(event);
      eventPairs.push({
        "STARTTIME": event["DTSTART;TZID=America/Vancouver"],
        "ENDTIME": event["DTEND;TZID=America/Vancouver"]
      });
    }
    let availability = new Array(48*5).fill(0);

    for (let event of eventPairs){
      /* each event is in the form { STARTTIME: "<>", ENDTIME: "<>"}*/
      let eventStart = event.STARTTIME;
      let eventEnd = event.ENDTIME;

      let year = eventStart.slice(0, 4);
      let month = parseInt(eventStart.slice(4, 6)) - 1;
      let day = eventStart.slice(6, 8);
      let hours = eventStart.slice(9, 11);
      let minutes = eventStart.slice(11, 13);

      let startDate = new Date(year, month, day, hours, minutes);

      if(!(startDate.getYear() === yearToKeep)) continue;


      year = eventEnd.slice(0, 4);
      month = parseInt(eventEnd.slice(4, 6)) - 1;
      day = eventEnd.slice(6, 8);
      hours = eventEnd.slice(9, 11);
      minutes = eventEnd.slice(11, 13);

      let endDate = new Date(year, month, day, hours, minutes);

      // console.log("StartDate", startDate);
      // populate starting at start time, in 30 minute increments to represent the day
      let beginIndex = (2*hours + Math.floor(minutes / 30)) + ((startDate.getDay() - 1) * 48);
      // console.log("Begin Index: ", beginIndex);
      let duration = (endDate.getTime()- startDate.getTime())/(1000*60*30);
      // console.log("endDate.getTime(): ", endDate.getTime);
      // console.log("startDate.getTime(): ", startDate.getTime());
      for(let i = 0;i < duration; i++ ){
        availability[beginIndex + i] = 1;
      }
    }
    res.send(availability);
  });
});

module.exports = router;

