import {Component} from '@angular/core';
import { FileUploader } from 'ng2-file-upload';

const URL = './send';

@Component({
  selector: 'upload-file',
  templateUrl: './upload-file.component.html'
})

export class UploadFileComponent {
  public uploader: FileUploader = new FileUploader({url : URL});

}
