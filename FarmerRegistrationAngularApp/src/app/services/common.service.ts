import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(
      private httpClient: HttpClient
  ) { }


  downloadFile(fileName: any, hospitalCode: any, date: any,) {
    let data = {
      f: fileName,
      h: hospitalCode,
      d: date,
    };
    let dataString = JSON.stringify(data);
    let queryParam = btoa(dataString);
    return this.httpClient.get('downloadFile' + '?' + 'data=' + queryParam, { responseType: 'blob' });
  }

  deleteServerLogFile(fileName: any) {
    let data = {
      f: fileName,
    };
    let dataString = JSON.stringify(data);
    let queryParam = btoa(dataString);
    return this.httpClient.get('deleteServerLogFile' + '?' + 'data=' + queryParam);
  }

  downloadServerLogFile(fileName: any) {
    let data = {
      f: fileName,
    };
    let dataString = JSON.stringify(data);
    let queryParam = btoa(dataString);
    return this.httpClient.get('downloadServerLogFile' + '?' + 'data=' + queryParam, { responseType: 'blob' });
  }

  openNewWindow(url: string): boolean {
    const width = 1200;
    const height = 700;
    const left = (screen.width - width) / 2;
    const top = (screen.height - height) / 2;

    let params = `width=${width}, height=${height}`;
    params += `, top=${top}, left=${left}`;
    params += ', directories=no';
    params += ', location=no';
    params += ', menubar=no';
    params += ', resizable=no';
    params += ', scrollbars=yes';
    params += ', status=no';
    params += ', toolbar=no';
    debugger;
    window.open("http://localhost:8080/" + url, 'windowname5', params);
    return false;
  }

  dycryptRequest(data: any) {
    let request = btoa(JSON.stringify(data));
    let requestedData = {
      "request": request
    }
    return requestedData;
  }
}
