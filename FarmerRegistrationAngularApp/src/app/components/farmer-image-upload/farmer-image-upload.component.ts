import { Component, OnInit } from '@angular/core';
import {FarmerComponent} from "../farmer/farmer.component";
import {FarmerImage} from "../../models/farmerImage";
import * as $ from "jquery";
import {FarmerService} from "../../services/farmer.service";
import {ResponseBean} from "../../beans/responseBean";
import {Router} from "@angular/router";
import {NgForm} from "@angular/forms";

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
  responseBean : ResponseBean = new ResponseBean();

  constructor(private farmerService : FarmerService, private router : Router) { }

  ngOnInit(): void {
    this.addFarmerImage();
    this.getFarmerListData();
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
  saveFarmerImage(form: NgForm){
    console.log(this.farmerImageData);
    console.log("NG Form");
    console.log(form);
    if (this.selectedFile){
      const file : File | null = this.selectedFile.item(0);
      console.log("Selected File--------------->>" );
      console.log(file);
      if (file){
        this.currentFile = file;
        this.farmerService.createFarmerImage(this.farmerImageData, this.currentFile).subscribe(data => {
          console.log(data);
          console.log(data.status);
          this.responseBean = data;
          console.log(this.responseBean)
          if (data.status == "Success"){
            console.log("Inside Match.");
            form.resetForm();
            this.router.navigate(["farmerImageUpload"]);
          }
        })
      }
    }else {
      console.log("Empty File.")
    }
  }

  getFarmerListData(){
    this.farmerService.getFarmerImageList().subscribe(data => {
      this.farmerImageDataList = data;
      console.log(this.farmerImageDataList);
    })
  }
  editFarmer(id : any){}
  deleteFarmer(id : any){}

}
