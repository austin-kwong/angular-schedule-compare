import {Component, OnInit} from '@angular/core';

import {FileUploader, ParsedResponseHeaders} from 'ng2-file-upload';

const URL = '/api';

@Component({
  selector: 'upload-page',
  template: `
    <div style="margin-top: 30px;">
      <input type="file" ng2FileSelect [uploader]="uploader" />
      <input type="submit" (click)="collectFile()"/>
    </div>
    <div>The availability {{availability}}</div>
    <div>The Response Headers {{headers}}</div>
    <div>Submit counter: {{counter}}</div>
    <upload-display [availability]="availability"></upload-display>
  `
})

export class UploadComponent implements OnInit {
  public availability: boolean[];
  public headers: ParsedResponseHeaders;
  public uploader: FileUploader;
  public counter = 5;
  ngOnInit(): void {
    this.uploader = new FileUploader({url: URL});
  }
  collectFile(): void {
    const self = this;
    this.uploader.onCompleteItem = function (item, response, status, headers) {
      ++self.counter;
      console.log('value of counter is now: ', self.counter);
      if (status === 200) {
        console.log('Setting availability to be ', response);
        self.availability = JSON.parse(response);
        self.headers = headers;
      }
    };
      for (const file of this.uploader.queue){
      console.log('Uploading file: ' + file.toString());
      file.upload();
    }
  }
}



