const express = require('express');
const multer = require('multer');
const fs = require('fs');
const upload = multer({ dest: 'uploads/' });
const ical2json = require('ical2json');


const router = express.Router();

const yearToKeep = 2017;


/* GET api listing. */
router.get('/', (req, res) => {
  res.send('API is online! Ready to receive requests...');
});



router.post('/visualize',upload.single('file'), (req, res) => {
  getAvailabilityObject(req.file.path).then((values) => {
    //console.log(values);
    res.status(200).send(values);
  }).catch((error) => {
    res.status(500).send('File selected is not a recognized type');
  });
});



router.post('/compare', upload.array('files[]'), (req, res) =>{
  //stub TODO: implement proper comparison visualization
  resultArray = [];
  console.log(req.files);
  for(let file of req.files){
    resultArray.push(getAvailabilityObject(file.path));
  }

  Promise.all(resultArray).then((values)=>{
    res.status(200).send(matchAvailabilities(values[0], values[1]));
  }).catch((err)=>{
    res.status(500).send("A selected file is an unrecognized type");
  });
});

function getAvailabilityObject(filePath){
    return new Promise((resolve, reject) => {
      fs.readFile(filePath, function (err, data) {
        if (err) {
          return console.log(err);
        }

        let calendarObject = ical2json.convert(data.toString());
        // console.log(calendarObject.VCALENDAR[0].VEVENT);

        // for (let prop in calendarObject.VCALENDAR.VEVENT){
        //   console.log(prop);
        // }
        //console.log(JSON.stringify(calendarObject));
        //if(calendarObject.VCALENDAR[0].VTIMEZONE){
        //  console.log(calendarObject.VCALENDAR[0].VTIMEZONE);
        //}
        let eventPairs = [];
        let events = [];
        if(calendarObject.VCALENDAR && calendarObject.VCALENDAR[0] && calendarObject.VCALENDAR[0].VEVENT) {
          for (let event of calendarObject.VCALENDAR[0].VEVENT) {
            console.log(event);
            eventPairs.push({
              "STARTTIME": event["DTSTART;TZID=America/Vancouver"],
              "ENDTIME": event["DTEND;TZID=America/Vancouver"],
              "LOCATION": event["LOCATION"],
              "SUMMARY": event["SUMMARY"]
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
              availability[startDate.getDay() - 1][beginIndex + i] = {STARTTIME: startDate, ENDTIME: endDate, LOCATION: event.LOCATION, CLASSNAME: event.SUMMARY};
            }

          }
          resolve(availability);
        } // guarded for proper format, otherwise return error
        else {
          reject('Unable to parse the file');
        }
      });

    });
}

function matchAvailabilities(a1, a2){
  let result = {};
  for (let key in a1){
    result[key] =  matchDay(a1[key], a2[key]);
  }
  //console.log(result);
  return result;
}

function matchDay(d1, d2){
  let res = new Array(48).fill(0);
  for(let i = 0; i < 48; i++){
    res[i] = !(d1[i] && d2[i]);
  }
  return res;
}





module.exports = router;

