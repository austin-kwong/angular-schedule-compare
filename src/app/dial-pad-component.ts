import {Component, OnInit} from '@angular/core';
import * as assert from "assert";


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
      <div *ngFor="let suggestion of possiblePalindromes">
        {{suggestion}}
      </div>
    </div>
  `,
  styleUrls: ['./dial-pad-component.css']
})

export class DialPadComponent implements OnInit {
  static MAX_LENGTH = 12;
  inputString: string;
  outputString: string;
  isPalindrome: boolean;
  possiblePalindromes: string[];



  static convertToDialpad(input: string): string {
      return input.replace(/[abcABC]/g, '2').replace(/[defDEF]/g, '3')
                  .replace(/[ghiGHI]/g, '4').replace(/[jklJKL]/g, '5')
                  .replace(/[mnoMNO]/g, '6').replace(/[pqrsPQRS]/g, '7')
                  .replace(/[tuvTUV]/g, '8').replace(/[wxyzWXYZ]/g, '9')
                  .replace(/\s/g, '');
  }

  static getFamilyFromChar(char: string) {
    assert(char.length === 1);
    switch (char.toLowerCase()) {
        case 'a':
        case 'b':
        case 'c':
          return ['a', 'b', 'c'];

        case 'd':
        case 'e':
        case 'f':
          return ['d', 'e', 'f'];

        case 'g':
        case 'h':
        case 'i':
          return ['g', 'h', 'i'];

      case 'j':
      case 'k':
      case 'l':
        return ['j', 'k', 'l'];


      case 'm':
      case 'n':
      case 'o':
        return ['m', 'n', 'o'];

      case 'p':
      case 'q':
      case 'r':
      case 's':
        return ['p', 'q', 'r', 's'];

      case 't':
      case 'u':
      case 'v':
        return ['t', 'u', 'v'];


      case 'w':
      case 'x':
      case 'y':
      case 'z':
        return ['w', 'x', 'y', 'z'];

    }
  }

  ngOnInit(): void {
    this.inputString = '';
    this.outputString = '';
    this.isPalindrome = false;
    this.possiblePalindromes = [];
  }
  handleTextChange(event): void {

    this.outputString = DialPadComponent.convertToDialpad(this.inputString);
    this.isPalindrome = this.stringIsPalindrome(this.outputString);
    const cleanedInput = this.inputString.trim().replace(/\s\n/g, '');

    if (this.outputString.length > 0 && this.outputString.length < DialPadComponent.MAX_LENGTH && !this.isPalindrome) {
      const possible = this.computePossibleStrings(cleanedInput);
      console.log(possible);
      const res = [];
      for (const possibleCompletion of possible){
        res.push(cleanedInput + possibleCompletion);
      }
      this.possiblePalindromes = res;
    } else {
      this.possiblePalindromes = [];
    }
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




  /**
   * Compute the possible strings that would be dialpad palindromic
   * @param {string} s The current string
   * @returns {string[]} A list of string completions that make the input palindromic
   */
  computePossibleStrings(s: string): string[] {
    console.log('Computing possible strings for: ', s);
    // prioritize a "mostly palindromic" solution
    let res: string[] = [];

    if (this.stringIsPalindrome(DialPadComponent.convertToDialpad(s.substring(1)))) {
      for (const c of DialPadComponent.getFamilyFromChar(s.charAt(0))){
        res.push(c);
      }
      return res;
    } else {
      const lastIndex = Math.ceil(s.length / 2);
      const toMiddle = s.substring(0, lastIndex);
      res = res.concat(this.recursiveConcat(toMiddle, ''));
      return res;
    }
  }

  recursiveConcat(s: string, ssf: string): string[] {
    let res: string[] = [];
    if (ssf.length === DialPadComponent.MAX_LENGTH) return []; // stop right there!
    if (ssf.length + 1 === s.length) {
      // at the very end, make an array of the possible strings
      for (const c of DialPadComponent.getFamilyFromChar(s.charAt(s.length - 1))) {
        res.push((ssf + c).split('').reverse().join(''));
      }
    } else {
      for (const c of DialPadComponent.getFamilyFromChar(s.charAt(ssf.length))){
        res = res.concat(this.recursiveConcat(s, ssf + c));
      }
    }
    return res;
  }

}
