import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';



const URL = '/api/compare';

@Component({
  selector: 'upload-compare',
  templateUrl: './upload-compare.component.html',
  styleUrls: ['./upload-compare.component.css']
})


export class UploadCompareComponent implements OnInit {
  public msgToDisplay = 'Please upload the first schedule';
  public availability: Object;
  private file1: File;
  private file2: File;
  private counter = 0;

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    const self = this;
  }

  onChange(event: any, schedule: number) {
    if (schedule === 1 && event.target.files.length > 0) {
      this.file1 = event.target.files[0];
    } else if (event.target.files.length > 0) {
      this.file2 = event.target.files[0];
    }
    console.log('file1: ', this.file1);
    console.log('file2: ', this.file2);
  }

  collectFiles(): void {
    console.log('collectFiles() called');
    const self = this;
    const form = new FormData();
    form.append('files[]', this.file1, this.file1.name);
    form.append('files[]', this.file2, this.file2.name);
    console.log(form.get('files[]'));
    this.http.post(URL, form).subscribe((response) => {
      self.availability = response;
    });
  }
}
