import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
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

}
