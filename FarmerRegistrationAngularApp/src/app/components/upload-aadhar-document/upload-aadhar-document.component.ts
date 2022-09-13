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
  aadharId : any;
  aadharDocPathId : any;
  documentType : any;
  docPath : String =  "C://FarmerRegistrationData//1//aadharDocument//220778011303//PayslipReport.pdf";

  constructor(private farmerService : FarmerService, private validationService : ValidationService) { }

  ngOnInit(): void {
    this.addFarmerAadhar();
    this.getAllFarmerList();
    $('#downloadFile').hide();
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
    // $('#downloadFile').show();//This is for Download File Button After Selection of Document
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
        this.aadharId = data.status;
        $('#aadharAlert').text("Your Aadhar Data is Present, Looks Good").css('color', 'green');
      }
    })
  }

  saveFarmerAadhar(form : NgForm){
    console.log(form);
    console.log(form.value);
    if (this.selectedFile){
      const file : File | null = this.selectedFile.item(0);
      console.log("Selected File--------------->>" );
      console.log(file);
      if (file){
        this.currentFile = file;
        this.farmerService.saveFarmerAadharDocument(this.aadharId, this.currentFile).subscribe(data => {
          console.log(data);
          this.aadharDocPathId = data.status;
          $('#downloadFile').show();
          // this.selectedFile = undefined;
        });
      }
    }else {
      console.log("Empty File.")
    }
  }

  downloadFile(){
    console.log(this.aadharDocPathId);


    // Download The Same File After Selection Form Local Folder
    // if (this.selectedFile) {
    //   console.log("Selected File is Present");
    //   const file: File | null = this.selectedFile.item(0);
    //   console.log(file);
    //   if (file) {
    //     console.log("Current File is Present");
    //     this.documentType = file.type;
    //     const blob = new Blob([file], { type: this.documentType });
    //     const url= window.URL.createObjectURL(blob);
    //     window.open(url);
    //   }
    // }else {
    //   console.log("Selected File is Null");
    // }



    this.farmerService.downloadFile1(this.aadharDocPathId).subscribe(data => {
      console.log("Result")
      console.log(data);
      // This Method To Download File
      let file = new Blob([data], { type: 'application/pdf' });
      var fileURL = URL.createObjectURL(file);
      window.open(fileURL)
    })
  }


  editFarmerAadhar(id : any){}
  deleteFarmerAadhar(id : any){}
}
