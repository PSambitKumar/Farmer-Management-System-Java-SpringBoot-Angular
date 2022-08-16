import { Component, OnInit } from '@angular/core';
import {FarmerComponent} from "../farmer/farmer.component";
import {FarmerImage} from "../../models/farmerImage";
import * as $ from "jquery";

@Component({
  selector: 'app-farmer-image-upload',
  templateUrl: './farmer-image-upload.component.html',
  styleUrls: ['./farmer-image-upload.component.css']
})
export class FarmerImageUploadComponent implements OnInit {
  farmerImageData : FarmerImage = new FarmerImage();
  farmerImageDataList : FarmerImage[] = [];

  constructor() { }

  ngOnInit(): void {
    this.addFarmerImage();
  }
  addFarmerImage(){
    $('#add').show();
    $('#view').hide();
  }

  viewFarmerImage(){
    $('#add').hide();
    $('#view').show();
  }
  saveFarmerImage(){}
  editFarmer(id : any){}
  deleteFarmer(id : any){}

}
