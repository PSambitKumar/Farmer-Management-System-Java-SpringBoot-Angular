import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {FarmerBean} from "../beans/farmerBean";
import {Observable} from "rxjs";
import {Farmer} from "../models/farmer";
import {ResponseBean} from "../beans/responseBean";
import {Relation} from "../models/relation";

@Injectable({
  providedIn: 'root'
})
export class FarmerService {
  private baseUrl = "http://localhost:8088/farmer/v1";

  constructor(private httpClient : HttpClient) { }

  // createFarmer(farmerBean : FarmerBean) : Observable<Farmer>{
  //   console.log("From Service : " + JSON.stringify(farmerBean));
  //   return this.httpClient.post<Farmer>(`${this.baseUrl +"/createFarmer"}`, farmerBean);
  // }
  createFarmer(farmerBean : FarmerBean) : Observable<ResponseBean>{
    console.log("From Service : " + JSON.stringify(farmerBean));
    return this.httpClient.post<ResponseBean>(`${this.baseUrl +"/createFarmer"}`, farmerBean);
  }

  getFarmerList() : Observable<Farmer[]>{
    return this.httpClient.get<Farmer[]>(`${this.baseUrl + "/getFarmerList"}`);
  }

  getBankDetailsUsingIFSC(ifscCode : any) : Observable<any>{
    return this.httpClient.get<any>(`${this.baseUrl + "/getBankUsingIFSCCode/"}` + ifscCode);
  }

  getValidateAadharId(aadharId : any) : Observable<any>{
    return this.httpClient.get<any>(`${this.baseUrl + "/getValidateAadhar/"}` + aadharId);
  }

  // getRelationList() : Observable<Relation[]>{
  //   return this.httpClient.get<Relation[]>(`${this.baseUrl + "/relationList"}`);
  // }

  deleteFarmerById(id : any) : Observable<ResponseBean>{
    return this.httpClient.get<ResponseBean>(`${this.baseUrl + "/deleteFarmer/"}` + id);
  }

  editFarmerById(id : any) : Observable<Farmer>{
    return this.httpClient.get<Farmer>(`${this.baseUrl + "/editFarmerById/"}` + id);
  }

  saveRelationUsingFarmerId(relation : Relation, farmerId : any) : Observable<ResponseBean>{
    return this.httpClient.post<ResponseBean>(`${this.baseUrl + "/saveRelationUsingFarmerId/"}` + farmerId, relation);
  }
}
