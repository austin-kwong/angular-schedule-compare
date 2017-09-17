import {Component, OnInit} from '@angular/core';
import { FileUploader } from 'ng2-file-upload';

const URL = '/api';

@Component({
  selector: 'upload-file',
  templateUrl: './upload-file.component.html'
})

export class UploadFileComponent implements OnInit {
  public uploader: FileUploader;
  files = [];
  ngOnInit(): void {
    this.uploader = new FileUploader({url : URL});
    this.uploader.onCompleteItem = function (item, response, status, headers){
      console.log(response);
    };
  }
  collectFile(): void {
    for (const file of this.uploader.queue){
      console.log('Uploading file: ' + file.toString());
      file.upload();
    }
  }

}
