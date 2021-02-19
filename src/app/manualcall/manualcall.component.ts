import { Component, OnInit } from '@angular/core';
import { trigger, state, transition, style, animate, keyframes } from '@angular/animations';

@Component({
  selector: 'manualcall-root',
  templateUrl: './manualcall.component.html',
  styles: [`
    h1{
      padding:0;
      margin:0 0 10px;
    }
    button{
       margin:0 0 10px;
       outline: none;
       background-color: #0099FF;
       color: #FFF;
       border: none;
       padding:5px 10px;
       border-radius:5px;
    }
    .square {
      height: 200px;
      width: 200px;
      background-image: linear-gradient(to top right, #FFFFFF, #00FFFF);
    }
  `],
  animations: [
    trigger('square', [
      transition('x => y', animate(2000, keyframes([
        style({ transform: 'rotateX(360deg)' })
      ]))),
      transition('y => z', animate(2000, keyframes([
        style({ transform: 'rotateY(360deg)' })
      ]))),
      transition('z => x', animate(2000, keyframes([
        style({ transform: 'rotateZ(-360deg)' }),
      ])))
    ]),
  ]
})
export class ManualcallComponent implements OnInit {
  squareState = 'x';
  count: number = 0;
  ngOnInit() { }
  start() {
    this.count++;
    if (this.count % 3 === 0) {
      this.squareState = 'x';
    } else if (this.count % 2 === 0) {
      this.squareState = 'z';
    } else {
      this.squareState = 'y';
    }
  }
}
