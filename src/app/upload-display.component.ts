import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'upload-display',
  templateUrl: './upload-display.component.html',
  styleUrls: ['./upload-display.component.css']
})



export class UploadDisplayComponent implements OnInit, OnChanges {
  toDisplay: Availability;
  timesToDisplay: String[];
  startIndex = 16;
  endIndex = 38;


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
    this.setBeginTime(this.startIndex);
    this.setEndTime(this.endIndex);
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges():: called');
    this.availability = changes.availability.currentValue;
    console.log('ngOnChanges():: availability change');
    console.log(JSON.stringify(this.availability));
    this.setBeginTime(this.startIndex);
    this.setEndTime(this.endIndex);
  }

  handleBeginChange(event: any) {
    const i = parseInt(event.target.value, 10);
    this.setBeginTime(i);
  }

  handleEndChange(event: any) {
    const i = parseInt(event.target.value, 10);
    this.setEndTime(i);
  }

  setBeginTime(i: number) {
    console.log('SetBeginTime():: called with: ', i);
    if (i + 1 < this.endIndex) {
      this.startIndex = i;
      this.toDisplay = {
        0: this.availability[0].slice(this.startIndex, this.endIndex),
        1: this.availability[1].slice(this.startIndex, this.endIndex),
        2: this.availability[2].slice(this.startIndex, this.endIndex),
        3: this.availability[3].slice(this.startIndex, this.endIndex),
        4: this.availability[4].slice(this.startIndex, this.endIndex)
      };
      this.timesToDisplay = [this.times[0]].concat(this.times.slice(this.startIndex + 1, this.endIndex + 1));
    }
  }

  setEndTime(i: number) {

    console.log('SetEndTime():: called with: ', i);

    if (this.startIndex < i + 1) {
      this.endIndex = i + 1;
      this.toDisplay = {
        0: this.availability[0].slice(this.startIndex, this.endIndex),
        1: this.availability[1].slice(this.startIndex, this.endIndex),
        2: this.availability[2].slice(this.startIndex, this.endIndex),
        3: this.availability[3].slice(this.startIndex, this.endIndex),
        4: this.availability[4].slice(this.startIndex, this.endIndex)
      };


      this.timesToDisplay = [this.times[0]].concat(this.times.slice(this.startIndex + 1, this.endIndex + 1));
      console.log('SetEndTime():: updated timesToDisplay: ', this.endIndex + 1);
    }
  }

  mouseEnterTimeSegment(event: any, wk: number, i: number) {
    console.log('hoverTimeSegment():: called with ', wk, i);
    const actualPos = i + this.startIndex;
    if (this.availability[wk][actualPos] !== 0) {
      event.target.innerHTML = (this.availability[wk][actualPos].LOCATION.replace('\\', ''));
    }
  }

  mouseLeaveTimeSegment(event: any, wk: number, i: number) {
    console.log('hoverTimeSegment():: called with ', wk, i);
    const actualPos = i + this.startIndex;
    if (this.availability[wk][actualPos] !== 0) {
      event.target.innerHTML = (this.availability[wk][actualPos].CLASSNAME);
    }
  }


}

export interface Availability {
  0: Object[];
  1: Object[];
  2: Object[];
  3: Object[];
  4: Object[];
}




