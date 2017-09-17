import {Component} from '@angular/core';
@Component({
  selector: 'upload-page',
  template: `
    <upload-file></upload-file>
    <upload-display [availability]="mockAvailability"></upload-display>
  `
})

export class UploadComponent {
  mockAvailability: boolean[] = [true, true, false, false, true, true, true, true, false, true];
}



