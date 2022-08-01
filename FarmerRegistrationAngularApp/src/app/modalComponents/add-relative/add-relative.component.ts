import {Component, Inject, OnInit} from '@angular/core';
import {Relation} from "../../models/relation";
import {Farmer} from "../../models/farmer";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {FarmerService} from "../../services/farmer.service";
import {ResponseBean} from "../../beans/responseBean";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-relative',
  templateUrl: './add-relative.component.html',
  styleUrls: ['./add-relative.component.css']
})
export class AddRelativeComponent implements OnInit {
  farmer : Farmer = new Farmer();
  relation : Relation = new Relation();
  relationData : Relation = new Relation();
  response : ResponseBean = new ResponseBean();
  constructor(@Inject(MAT_DIALOG_DATA) public data : any, private farmerService : FarmerService, private router : Router) { }

  ngOnInit(): void {
    this.loadDataReceivedFromViewRelationComponent();
  }

  loadDataReceivedFromViewRelationComponent(){
    console.log("Inside loadDataReceivedFromViewRelationComponent");
    console.log(this.data);
    this.farmer = this.data.farmer;
    console.log(this.farmer);
  }

  relativeForm(){
    console.log(this.relation);
    this.farmerService.saveRelationUsingFarmerId(this.relation, this.farmer.id).subscribe(data =>{
      console.log(data);
      this.response = data;
      if (this.response.status == "Success"){
        console.log("Farmer Data Updated Successfully.");
        this.router.navigate([""]);
      }
    })
  }

  checkIFSCCode(ifscCode : any){}

}
