import {Component, OnInit} from '@angular/core';


@Component({
  selector: 'dial-padder',
  template: `
    <div>
      <br/>
      <br/>
      <label>Input String:</label>
      <input [(ngModel)]="inputString" (ngModelChange)="handleTextChange($event)" placeholder="name" />
      <div >
        <h2 [ngClass]="{palindrome: isPalindrome}">{{outputString}}</h2>
      </div>
    </div>
  `,
  styleUrls: ['./dial-pad-component.css']
})

export class DialPadComponent implements OnInit {
  inputString: string;
  outputString: string;
  isPalindrome: boolean;

  ngOnInit(): void {
    this.inputString = '';
    this.outputString = '';
    this.isPalindrome = false;
  }
  handleTextChange(event): void {
    this.outputString = this.inputString.replace(/[abcABC]/g, '2').replace(/[defDEF]/g, '3')
                                        .replace(/[ghiGHI]/g, '4').replace(/[jklJKL]/g, '5')
                                        .replace(/[mnoMNO]/g, '6').replace(/[pqrsPQRS]/g, '7')
                                        .replace(/[tuvTUV]/g, '8').replace(/[wxyzWXYZ]/g, '9')
                                        .replace(/\s/g, '');
    this.isPalindrome = this.stringIsPalindrome(this.outputString);
  }
  stringIsPalindrome(s: string): boolean {
    for (let i = 0, j = s.length - 1; i < s.length && j >= 0 ; i++, j--) {
        if (i >= j) return true;
        if (s.charAt(i) !== s.charAt(j)) {
          return false;
        }
    }
    return true;
  }

}
