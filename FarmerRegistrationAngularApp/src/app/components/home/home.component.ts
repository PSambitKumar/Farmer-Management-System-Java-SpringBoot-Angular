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

}
