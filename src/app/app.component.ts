import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  pattern: string = 'auto'; // 模式

  ngOnInit() { }

  constructor() { }

  /**模式改变
   * @param string 模式关键字
   */
  patternChange(string) {
    this.pattern = string;
  }
}
