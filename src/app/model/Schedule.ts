import {Availability} from "../upload-display.component";

export class ClassSchedule {
  classBlocks: ClassBlock;

}


export class ClassBlock {
  private _startTime: Date;
  private _endTime: Date;
  private _location: String;
  private _className: String;

  constructor(startTime: Date, endTime: Date, location: String, name: String) {
    this._startTime = startTime;
    this._endTime = endTime;
    this._location = location;
    this._className = name;

    console.log('Created', toString());
  }


  get startTime(): Date {
    return this._startTime;
  }

  get endTime(): Date {
    return this._endTime;
  }

  get location(): String {
    return this._location;
  }

  get className(): String {
    return this._className;
  }

  toString(): String {
    return this._className + ' at ' + this._location;
  }
}
