import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  timeRemaining: number = 0;
  intervalId: any;
  formattedTime: string = '--:--';

  constructor() { }

  ngOnInit(): void {
    this.timeRemaining = 600;
    this.updateTime();
  }

  myFun() {
    alert("Start");
    var val: (string | number | string[] | undefined)[] = [];
    $(':checkbox:checked').each(function (i) {
      alert("Inside Method.");
      val[i] = $(this).val();
    });
    alert(val)
    alert("End");
  }

  updateTime() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }

    this.intervalId = setInterval(() => {
      if (this.timeRemaining > 0) {
        this.timeRemaining--;
        this.formattedTime = this.formatTime(this.timeRemaining);
        console.log(this.formattedTime);
      }
    }, 1000);
  }

  addTime() {
    this.timeRemaining += 600;
  }

  formatTime(seconds: number): string {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${this.pad(minutes)}:${this.pad(remainingSeconds)}`;
  }

  pad(val: number): string {
    return val < 10 ? `0${val}` : `${val}`;
  }

}
