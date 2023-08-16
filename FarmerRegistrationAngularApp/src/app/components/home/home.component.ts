import { Component, OnInit } from '@angular/core';
import {Bank} from "../../models/bank";
import {FarmerService} from "../../services/farmer.service";
import {Relation} from "../../models/relation";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  data : any = [];//For Declaration of Random Array
  // private relationList: Relation[] = [];
  constructor(private farmerService : FarmerService) { }

  ngOnInit(): void {
    // this.getRelationList();
  }

  // getRelationList(){
  //   this.farmerService.getRelationList().subscribe(data =>{
  //     console.log(data);
  //     this.relationList = data;
  //     for (const relationListElement of this.relationList) {
  //       console.log(relationListElement);
  //       console.log(relationListElement.bank);
  //     }
  //   });
  // }


  // generate Form and Auto Submit
  postForm(path: any, encData: any, method: any) {
    const form = document.createElement('form');
    form.setAttribute('method', method);
    form.setAttribute('action', path);

    const hiddenField = document.createElement('input');
    hiddenField.setAttribute('type', 'hidden');
    hiddenField.setAttribute('name', 'encData');
    hiddenField.setAttribute('value', encData);
    form.appendChild(hiddenField);

    document.body.appendChild(form);
    form.submit();
  }

  postForm1(path : any, params : any, method="") {
    method = method || 'post';

    var form = document.createElement('form');
    form.setAttribute('method', method);
    form.setAttribute('action', path);

    for (var key in params) {
      if (params.hasOwnProperty(key)) {
        var hiddenField = document.createElement('input');
        hiddenField.setAttribute('type', 'hidden');
        hiddenField.setAttribute('name', key);
        hiddenField.setAttribute('value', params[key]);
        form.appendChild(hiddenField);
      }
    }
    document.body.appendChild(form);
    form.submit();
  }
}
