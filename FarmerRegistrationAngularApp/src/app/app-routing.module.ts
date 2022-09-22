import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FarmerComponent} from "./components/farmer/farmer.component";
import {HomeComponent} from "./components/home/home.component";
import {TestComponent} from "./components/test/test.component";
import {AddRelativeComponent} from "./modalComponents/add-relative/add-relative.component";
import {
  FarmerPortalRegistrationComponent
} from "./components/farmer-portal-registration/farmer-portal-registration.component";
import {FarmerImageUploadComponent} from "./components/farmer-image-upload/farmer-image-upload.component";
import {UploadAadharDocumentComponent} from "./components/upload-aadhar-document/upload-aadhar-document.component";
import {
  FarmerEducationDetailsComponent
} from "./components/farmer-education-details/farmer-education-details.component";

const routes: Routes = [
  {path: "home", component:HomeComponent},
  {path:"", redirectTo:"home", pathMatch:"full"},
  {path:"farmerManagement", component:FarmerComponent},
  {path : "testPurpose", component : TestComponent},
  {path : "addRelative", component : AddRelativeComponent},
  {path : "farmerPortalRegistration", component : FarmerPortalRegistrationComponent},
  {path : "farmerImageUpload", component : FarmerImageUploadComponent},
  {path : "uploadAadharDocument", component : UploadAadharDocumentComponent},
  {path : "farmerEducationDetails", component : FarmerEducationDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
