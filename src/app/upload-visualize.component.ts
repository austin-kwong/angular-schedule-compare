import {Component, OnInit} from '@angular/core';

import {FileUploader, ParsedResponseHeaders} from 'ng2-file-upload';

const URL = '/api/visualize';

@Component({
  selector: 'upload-visualize',
  templateUrl: './upload-visualize.component.html',
  styleUrls: ['./upload-visualize.component.css']
})
// })

export class UploadVisualizeComponent implements OnInit {
  public availability: Object;
  public error: string;
  public uploader: FileUploader;
  ngOnInit(): void {
    this.uploader = new FileUploader({url: URL});

    // mocking behaviour
    this.availability = {
      0: new Array(48).fill(1),
      1: new Array(48).fill(1),
      2: new Array(48).fill(1),
      3: new Array(48).fill(1),
      4: new Array(48).fill(1)
    };

  }
  collectFile(): void {
    const self = this;
    this.uploader.onCompleteItem = function (item, response, status, headers) {
      self.uploader.clearQueue();
      if (status === 200) {
        console.log('New availability received...', JSON.stringify(response));
        self.availability = JSON.parse(response);
        self.error = null;

      } else if (status === 500) {
        console.log('Received Error from api', response);
        self.error = response;

      }
    };
    for (const file of this.uploader.queue){

      console.log('Uploading file: ' + file.toString());
      file.upload();
    }
  }
}
//
