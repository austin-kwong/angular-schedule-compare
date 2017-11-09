import {Component, OnInit} from '@angular/core';


@Component({
  selector: 'dial-padder',
  template: `
    <div>
      <br/>
      <br/>
      <label>Input String:</label>
      <input [(ngModel)]="inputString" (ngModelChange)="handleTextChange($event)" placeholder="name" />
      <div>
        <h2>{{outputString}}</h2>
      </div>
    </div>
  `,
  styleUrls: ['./upload-display.component.css']
})

export class DialPadComponent implements OnInit {
  inputString: string;
  outputString: string;

  ngOnInit(): void {
    this.inputString = '';
    this.outputString = '--------';
  }
  handleTextChange(event): void {
    this.outputString = this.inputString.replace(/[abcABC]/g, '2').replace(/[defDEF]/g, '3')
                                        .replace(/[ghiGHI]/g, '4').replace(/[jklJKL]/g, '5')
                                        .replace(/[mnoMNO]/g, '6').replace(/[pqrsPQRS]/g, '7')
                                        .replace(/[tuvTUV]/g, '8').replace(/[wxyzWXYZ]/g, '9');
  }

}
