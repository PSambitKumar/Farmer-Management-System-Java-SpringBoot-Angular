import { Injectable } from '@angular/core';
import {HttpClient, HttpEvent, HttpParams, HttpRequest} from "@angular/common/http";
import {FarmerBean} from "../beans/farmerBean";
import {Observable} from "rxjs";
import {Farmer} from "../models/farmer";
import {ResponseBean} from "../beans/responseBean";
import {Relation} from "../models/relation";
import {FarmerImage} from "../models/farmerImage";

@Injectable({
  providedIn: 'root'
})
export class FarmerService {
  private baseUrl = "http://localhost:8080/farmer/v1";
  responseTime : any;

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

  getAadharIdByFarmerId(id : any) : Observable<ResponseBean>{
    return this.httpClient.get<ResponseBean>(`${this.baseUrl + "/getAadharIdUsingFarmerId/"}` + id);
  }



//   public getDentists(name, city, type, rating): Observable<Dentist[]>{
//     let params = new HttpParams();
//     params = params.append('name', name);
//     params = params.append('city', city);
//     params = params.append('type', type);
//     params = params.append('rating', rating);
//     return this.httpClient.get('dentists/', {params: params});
//   }
//   in my Controller.java
//   @RequestMapping(value = "/dentists", method = RequestMethod.GET)
//   public List<Dentist> search(@RequestParam("name") String name,
//   @RequestParam("city") String city,
//   @RequestParam("type") String type,
//   @RequestParam("rating") String rating) {
//   return dentistRepository.findDentistByName(name);
// }




  // Farmer Image Upload Service Working 1
  // createFarmerImage(farmerImage : FarmerImage, imageData : File) : Observable<HttpEvent<any>>{
  //   const farmerImageData = new FormData();
  //   farmerImageData.append("imageData", imageData);
  //   const req = new HttpRequest('POST', `${this.baseUrl}/createFarmerImage`, farmerImageData);
  //   return this.httpClient.request(req);
  // }

  // Farmer Image Upload Service Working 2
  // createFarmerImage(farmerImage : FarmerImage, imageData : File) : Observable<HttpEvent<any>>{
  //   const farmerImageData = new FormData();
  //   farmerImageData.append("imageData", imageData);
  //   const req = new HttpRequest('POST', `${this.baseUrl}/createFarmerImage/` , farmerImage);
  //   return this.httpClient.request(req);
  // }

  // Farmer Image Upload Service Working 3
// createFarmerImage(farmerImage : FarmerImage, imageData : File) : Observable<HttpEvent<ResponseBean>>{
//   const farmerImageData = new FormData();
//   farmerImageData.append("imageData", imageData);
//   farmerImageData.append("name", farmerImage.name);
//   farmerImageData.append("image", farmerImage.image);
//   const req = new HttpRequest('POST', `${this.baseUrl}/createFarmerImage`, farmerImageData);
//   return this.httpClient.request(req);
// }

  // getBeneficiaryList(id,flag,block,user) {
  //   let headers = new HttpHeaders({
  //     'Content-Type': 'application/json',
  //     'Authorization': this.jwtService.getJwtToken()
  //   })
  //   let options = {
  //     headers:headers,
  //     params: {
  //       'userId': id,
  //       'flag': flag,
  //       'block': block,
  //       'mskuser': user,
  //     }
  //   }
  //   return this.httpClient.get(getBeneficiaryList,options)
  // }
  // cardPrint(data: any){
  //   let headers = new HttpHeaders({
  //     'Content-Type': 'application/json',
  //     'Authorization': this.jwtService.getJwtToken()
  //   })
  //   let options = {
  //     headers:headers
  //   }
  //   return this.httpClient.post(cardPrint,data,options)
  // }
  //
  // getCardDeliveryStatusUsingURN(urn : any) {
  //   let headers = new HttpHeaders({
  //     'Content-Type': 'application/json',
  //     'Authorization': this.jwtService.getJwtToken()
  //   })
  //   let options = {
  //     headers:headers,
  //     params: {
  //       'urn': urn
  //     }
  //   }
  //   return this.httpClient.get(getCardDeliveryStatusUsingURN,options)
  // }

  // Sending Data Using Post Method Using FormData
  createFarmerImage(farmerImage : FarmerImage, imageData : File) : Observable<ResponseBean>{
    const farmerImageData = new FormData();
    farmerImageData.append("imageData", imageData);
    farmerImageData.append("name", farmerImage.name);
    farmerImageData.append("image", farmerImage.farmerImagePath);
    return this.httpClient.post<ResponseBean>(`${this.baseUrl}/createFarmerImage`, farmerImageData)
  }

  // Sending Data Using Params Using Get Method
  createFarmerImage1(farmerImage : FarmerImage, imageData : File) : Observable<ResponseBean>{
    return this.httpClient.post<ResponseBean>(`${this.baseUrl}/createFarmerImage`, {params: farmerImage, imageData})
  }
  
  getFarmerImageList() : Observable<FarmerImage[]> {
    return this.httpClient.get<FarmerImage[]>(`${this.baseUrl}/getFarmerImageList`);
  }

  saveFarmerAadharDocument(aadharId : any, aadharDocument : File) : Observable<ResponseBean>{
    const aadharDocumentData = new FormData();
    aadharDocumentData.append("aadharDocument", aadharDocument);
    return this.httpClient.post<ResponseBean>(`${this.baseUrl}/saveFarmerAadharDocument/` + aadharId, aadharDocumentData);
  }

  // Perfectly Working
  downloadFile1(aadharDocPathId : any) : Observable<any> {
    const httpOptions = {
      // 'responseType'  : 'arraybuffer' as 'json' //This also worked
      'responseType'  : 'blob' as 'json'
    };
    return this.httpClient.get<any>(`${this.baseUrl}/downloadFileData`, httpOptions);
  }

  // Working But Not Downloading
  // downloadFile(aadharDocPathId : any) : Observable<ResponseBean> {
  //   // alert("From Service : " + path);
  //   return this.httpClient.get<ResponseBean>(`${this.baseUrl}/downloadFile1/` + aadharDocPathId/*, {responseType: 'blob' as 'json'}*/);
  // }


}


