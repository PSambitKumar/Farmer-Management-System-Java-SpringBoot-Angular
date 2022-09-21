import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FarmerComponent } from './components/farmer/farmer.component';
import { HomeComponent } from './components/home/home.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {DataTablesModule} from "angular-datatables";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {MatDialogModule} from "@angular/material/dialog";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BankModalComponent } from './modalComponents/bank-modal/bank-modal.component';
import { TestComponent } from './components/test/test.component';
import { ViewRelativesComponent } from './modalComponents/view-relatives-modal/view-relatives.component';
import {MatButtonModule} from "@angular/material/button";
import {AddRelativeComponent} from "./modalComponents/add-relative/add-relative.component";
import { FarmerPortalRegistrationComponent } from './components/farmer-portal-registration/farmer-portal-registration.component';
import { FarmerImageUploadComponent } from './components/farmer-image-upload/farmer-image-upload.component';
import { UploadAadharDocumentComponent } from './components/upload-aadhar-document/upload-aadhar-document.component';

@NgModule({
  declarations: [
    AppComponent,
    FarmerComponent,
    HomeComponent,
    BankModalComponent,
    TestComponent,
    ViewRelativesComponent,
    AddRelativeComponent,
    FarmerPortalRegistrationComponent,
    FarmerImageUploadComponent,
    UploadAadharDocumentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,//Added for Http Redirect
    FormsModule,//Added for Form Module
    DataTablesModule,//Added For Data Table
    FontAwesomeModule,//For Font Awesome
    MatDialogModule, BrowserAnimationsModule, MatButtonModule,//For Modal
    FontAwesomeModule//Font Awesome Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
