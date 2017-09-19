import {Component, OnInit} from '@angular/core';

import {FileUploader, ParsedResponseHeaders} from 'ng2-file-upload';

const URL = '/api/visualize';

@Component({
  selector: 'upload-visualize',
  templateUrl: './upload-visualize.component.html'
})

export class UploadVisualizeComponent implements OnInit {
  public availability: Object;
  public error: string;
  public uploader: FileUploader;
  ngOnInit(): void {
    this.uploader = new FileUploader({url: URL});
  }
  collectFile(): void {
    const self = this;
    this.uploader.onCompleteItem = function (item, response, status, headers) {
      if (status === 200) {
        console.log('Setting availability to be ', response);
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



