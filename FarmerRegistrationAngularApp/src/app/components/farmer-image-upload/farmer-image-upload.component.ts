import { Component, OnInit } from '@angular/core';
import {FarmerComponent} from "../farmer/farmer.component";
import {FarmerImage} from "../../models/farmerImage";
import * as $ from "jquery";
import {FarmerService} from "../../services/farmer.service";

@Component({
  selector: 'app-farmer-image-upload',
  templateUrl: './farmer-image-upload.component.html',
  styleUrls: ['./farmer-image-upload.component.css']
})
export class FarmerImageUploadComponent implements OnInit {
  farmerImageData : FarmerImage = new FarmerImage();
  farmerImageDataList : FarmerImage[] = [];
  selectedFile? : FileList;
  currentFile?: File;

  constructor(private farmerService : FarmerService) { }

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
  getFile(event : any){
    this.selectedFile = event.target.files;
    console.log("Inside GetFile----------->>");
    console.log(this.selectedFile);
  }
  saveFarmerImage(){
    console.log(this.farmerImageData);
    if (this.selectedFile){
      const file : File | null = this.selectedFile.item(0);
      console.log("Selected File--------------->>" );
      console.log(file);
      if (file){
        this.currentFile = file;
        this.farmerService.createFarmerImage(this.farmerImageData, this.currentFile).subscribe(data => {
          console.log(data);
        })
      }
    }else {
      console.log("Empty File.")
    }
  }
  editFarmer(id : any){}
  deleteFarmer(id : any){}

}
