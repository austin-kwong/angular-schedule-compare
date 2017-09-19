import {Component, OnInit} from '@angular/core';
import {FileItem, FileUploader} from 'ng2-file-upload';



const URL = '/api/compare';

@Component({
  selector: 'upload-compare',
  templateUrl: './upload-compare.component.html',
  styleUrls: ['./upload-compare.component.css']
})


export class UploadCompareComponent implements OnInit {
  public msgToDisplay = 'Please upload the first schedule';
  public uploader: FileUploader = new FileUploader({url: URL});
  private counter = 0;


  ngOnInit(): void {
    const self = this;
    this.uploader.onCompleteItem = (file, response, status, headers ) => {
      if (status === 500) {
        self.msgToDisplay = response;
      } else if (status === 200) {
        self.msgToDisplay = 'Great...computing the intersection';
        console.log(response);
      }
    };
  }
  collectFiles(): void {
    console.log('collectFiles() called');
    const xhr = new XMLHttpRequest();
    const form = new FormData();
    console.log('Files in queue: ', this.uploader.queue.length);
    // for (const file of this.uploader.queue) {
    //   form.append('files', file._file, file.file.name);
    // }
    console.log(form);
     xhr.open('POST', URL);
     xhr.send(form);
  }
}
