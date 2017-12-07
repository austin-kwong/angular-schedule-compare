import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'upload-display',
  templateUrl: './upload-display.component.html',
  styleUrls: ['./upload-display.component.css']
})



export class UploadDisplayComponent implements OnInit, OnChanges {
  toDisplay: Availability;
  timesToDisplay: String[];
  startIndex = 1;
  endIndex = 48;


  @Input() availability: Availability;



  times: String[] = ['---------', '00:00 - 00:30', '00:30 - 01:00', '01:00 - 01:30', '01:30 - 02:00',
    '02:00 - 02:30', '02:30 - 03:00', '03:00 - 03:30', '03:30 - 04:00', '04:00 - 04:30',
    '04:30 - 05:00', '05:00 - 05:30', '05:30 - 06:00', '06:00 - 06:30', '06:30 - 07:00',
    '07:00 - 07:30', '07:30 - 08:00', '08:00 - 08:30', '08:30 - 09:00', '09:00 - 09:30',
    '09:30 - 10:00', '10:00 - 10:30', '10:30 - 11:00', '11:00 - 11:30', '11:30 - 12:00',
    '12:00 - 12:30', '12:30 - 13:00', '13:00 - 13:30', '13:30 - 14:00', '14:00 - 14:30',
    '14:30 - 15:00', '15:00 - 15:30', '15:30 - 16:00', '16:00 - 16:30', '16:30 - 17:00',
    '17:00 - 17:30', '17:30 - 18:00', '18:00 - 18:30', '18:30 - 19:00', '19:00 - 19:30',
    '19:30 - 20:00', '20:00 - 20:30', '20:30 - 21:00', '21:00 - 21:30', '21:30 - 22:00',
    '22:00 - 22:30', '22:30 - 23:00', '23:00 - 23:30', '23:30 - 24:00'];


  beginTimes: String[] = ['00:00',  '00:30',  '01:00',  '01:30',  '02:00',  '02:30',  '03:00',
    '03:30',  '04:00',  '04:30',  '05:00',  '05:30',  '06:00',  '06:30',  '07:00',  '07:30',
    '08:00',  '08:30',  '09:00',  '09:30',  '10:00',  '10:30',  '11:00',  '11:30', '12:00',
    '12:30',  '13:00',  '13:30',  '14:00',  '14:30',  '15:00',  '15:30',  '16:00', '16:30',
    '17:00',  '17:30',  '18:00',  '18:30',  '19:00',  '19:30',  '20:00',  '20:30',  '21:00',
    '21:30',  '22:00',  '22:30',  '23:00',  '23:30'
  ];

  endTimes: String[] = ['00:30', '01:00', '01:30', '02:00', '02:30', '03:00', '03:30', '04:00',
    '04:30', '05:00', '05:30', '06:00', '06:30', '07:00', '07:30', '08:00', '08:30', '09:00',
    '09:30', '10:00', '10:30', '11:00', '11:30', '12:00',
    '12:30',  '13:00',  '13:30',  '14:00',  '14:30',  '15:00',  '15:30',  '16:00', '16:30',
    '17:00',  '17:30',  '18:00',  '18:30',  '19:00',  '19:30',  '20:00',  '20:30',  '21:00',
    '21:30',  '22:00',  '22;30',  '23:00',  '23:30', '24:00'];

  ngOnInit(): void {
    this.toDisplay = this.availability;
    this.timesToDisplay = this.times;
    this.setBeginTime(16);
    this.setEndTime(39);
  }

  ngOnChanges(changes: SimpleChanges) {
    this.availability = changes.availability.currentValue;
    this.setBeginTime(this.startIndex);
    this.setEndTime(this.endIndex);
  }

  setBeginTime(i: number) {
    if (i + 1 < this.endIndex) {
      this.startIndex = i + 1;
      console.log('Start Index:', this.startIndex, 'End Index:', this.endIndex);
      this.toDisplay = {
        0: this.availability[0].slice(this.startIndex - 1, this.endIndex - 1),
        1: this.availability[1].slice(this.startIndex - 1, this.endIndex - 1),
        2: this.availability[2].slice(this.startIndex - 1, this.endIndex - 1),
        3: this.availability[3].slice(this.startIndex - 1, this.endIndex - 1),
        4: this.availability[4].slice(this.startIndex - 1, this.endIndex - 1)
      };
      this.timesToDisplay = [this.times[0]].concat(this.times.slice(this.startIndex, this.endIndex));
    }
  }

  setEndTime(i: number) {

    if (this.startIndex < i + 2) {
      this.endIndex = i + 2;
      console.log('Start Index:', this.startIndex, 'End Index:', this.endIndex);
      this.toDisplay = {
        0: this.availability[0].slice(this.startIndex - 1, this.endIndex - 1),
        1: this.availability[1].slice(this.startIndex - 1, this.endIndex - 1),
        2: this.availability[2].slice(this.startIndex - 1, this.endIndex - 1),
        3: this.availability[3].slice(this.startIndex - 1, this.endIndex - 1),
        4: this.availability[4].slice(this.startIndex - 1, this.endIndex - 1)
      };


      this.timesToDisplay = [this.times[0]].concat(this.times.slice(this.startIndex, this.endIndex));
    }
  }
}

export interface Availability {
  0: number[];
  1: number[];
  2: number[];
  3: number[];
  4: number[];
}




