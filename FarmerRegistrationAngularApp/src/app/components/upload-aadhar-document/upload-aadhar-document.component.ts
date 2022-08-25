import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {FarmerService} from "../../services/farmer.service";
import {Farmer} from "../../models/farmer";
import {ValidationService} from "../../services/validation.service";
import * as $ from "jquery";
import {FarmerAadharUpload} from "../../models/FarmerAadharUpload";

@Component({
  selector: 'app-upload-aadhar-document',
  templateUrl: './upload-aadhar-document.component.html',
  styleUrls: ['./upload-aadhar-document.component.css']
})
export class UploadAadharDocumentComponent implements OnInit {
  farmerList : Farmer[] = [];
  selectedFile? : FileList;
  currentFile?: File;
  FarmerAadharUploadList : FarmerAadharUpload[] = [];

  constructor(private farmerService : FarmerService, private validationService : ValidationService) { }

  ngOnInit(): void {
    this.addFarmerAadhar();
    this.getAllFarmerList();
  }

  getAllFarmerList(){
    this.farmerService.getFarmerList().subscribe(data => {
      console.log(data);
      this.farmerList = data;
      console.log("Farmer List------>>");
      console.log(this.farmerList);
      if (this.farmerList.length == 0){
        console.log("Inside Empty Farmer List.");
        $("#adhaarId").prop('disabled', true); //disable
        $("#farmerAadharDoc").prop('disabled', true); //disable
        $("#btnSubmit").prop('disabled', true); //disable
        $("#btnReset").prop('disabled', true); //disable
      }
    })
  }

  checkAadharId(aadharId : any){
    console.log(aadharId);
    this.validationService.validateAadhar(aadharId, "#adhaarId", "#aadharAlert");
  }

  // File Saved in Selected File Variable
  getFile(event : any){
    this.selectedFile = event.target.files;
    console.log("Inside GetFile----------->>");
    console.log(this.selectedFile);
  }
  addFarmerAadhar(){
    $('#add').show();
    $('#view').hide();
  }
  viewFarmerAadhar(){
    $('#add').hide();
    $('#view').show();
  }

  getAadharByFarmerId(){
    var farmerId = $('#farmerName').val();
    console.log(farmerId);
    this.farmerService.getAadharIdByFarmerId(farmerId).subscribe(data => {
      console.log(data);
      if (data.status == "Absent"){
        console.log(data.status);
        $('#aadharAlert').text("Your Aadhar Data is Missing, Please Provide!").css('color', 'red');
      }else {
        $('#adhaarId').val(data.status);
        $('#aadharAlert').text("Your Aadhar Data is Present, Looks Good").css('color', 'green');
      }
    })
  }

  saveFarmerAadhar(form : NgForm){
  }

  editFarmerAadhar(id : any){}
  deleteFarmerAadhar(id : any){}
}
