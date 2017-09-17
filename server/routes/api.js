const express = require('express');
const multer = require('multer');
const fs = require('fs');
const upload = multer({ dest: 'uploads/' });
var ical2json = require('ical2json');


const router = express.Router();



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
    console.log(calendarObject.VCALENDAR[0].VEVENT);

    // for (let prop in calendarObject.VCALENDAR.VEVENT){
    //   console.log(prop);
    // }

    let eventPairs = [];
    for (let event of calendarObject.VCALENDAR[0].VEVENT) {
      console.log(event);
      eventPairs.push({
        "STARTTIME": event["DTSTART;TZID=America/Vancouver"],
        "ENDTIME": event["DTEND;TZID=America/Vancouver"]
      });
    }

    console.log("Returning", eventPairs);

    res.send("Backend received file: \n" + eventPairs);
  });
});

module.exports = router;

