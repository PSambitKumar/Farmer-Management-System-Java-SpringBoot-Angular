import {Component, Inject, OnInit} from '@angular/core';
import {Relation} from "../../models/relation";
import {MAT_DIALOG_DATA, MatDialog} from "@angular/material/dialog";
import {Router} from "@angular/router";
import {Farmer} from "../../models/farmer";
import {MainService} from "../../services/main.service";
import {AddRelativeComponent} from "../add-relative/add-relative.component";

@Component({
  selector: 'app-view-relatives',
  templateUrl: './view-relatives.component.html',
  styleUrls: ['./view-relatives.component.css']
})
export class ViewRelativesComponent implements OnInit {
  farmer : Farmer = new Farmer();
  farmerId : any;
  farmerName : any;
  relativeList : Relation [] = [];

  constructor(@Inject(MAT_DIALOG_DATA) public data : any, private router : Router, private mainService : MainService, public matDiaLog : MatDialog) { }

  ngOnInit(): void {
    this.loadDataReceived();
  }

  loadDataReceived(){
    console.log("Inside Load Data Received.");
    console.log(this.data);
    this.farmer = this.data.farmer;
    this.farmerId = this.data.farmerId;
    this.farmerName = this.data.farmerName;
    this.relativeList = this.data.relationList;
    console.log(this.farmer);
    console.log(this.farmerId);
    console.log(this.farmerName);
    console.log(this.relativeList);
  }

  addRelative(){
    console.log("Inside Add Relative Method.");
    const matDialofRef = this.matDiaLog.open(AddRelativeComponent, {
      data : {
        "farmer" : this.farmer
      }
    });
    matDialofRef.afterClosed().subscribe(result =>{
      console.log(`Dialog Result : ${result}`);
    });
  }
}
