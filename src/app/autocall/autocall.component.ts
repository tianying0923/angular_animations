import { Component, OnInit } from '@angular/core';
import { trigger, state, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'autocall-root',
  templateUrl: './autocall.component.html',
  styles: [`
    h1{
      padding:0;
      margin:0 0 10px;
    }
    .square{
      background-image: linear-gradient(to bottom right, #FF9900, #FF99FF);
    }
  `],
  animations: [
    trigger('square', [
      state('initial', style({
        height: '200px',
        width: "200px",
      })),
      state('final', style({
        height: "{{divHeigth}}px",
        width: "500px"
      }), { params: { divHeigth: "200" } }),
      transition('initial => final', animate('5s ease-in')),
      transition('final => initial', animate('5s ease-out'))
    ]),
  ]
})
export class AutocallComponent implements OnInit {
  divHeigth: number;
  squareState = 'initial';

  ngOnInit() {
    this.divHeigth = 500;
    setTimeout(() => {
      this.squareState = 'final';
    }, 500);
  }
}
