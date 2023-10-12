import { Injectable } from '@angular/core';
import Swal from "sweetalert2";

@Injectable({
  providedIn: 'root'
})
export class SWALService {

  constructor() { }

  successSWAL(title: string, text: string) {
    Swal.fire({
      title: title,
      text: text,
      icon: 'success',
      confirmButtonText: 'OK'
    })
  }

  errorSWAL(title: string, text: string) {
    Swal.fire({
      title: title,
      text: text,
      icon: 'error',
      confirmButtonText: 'OK'
    })
  }

  warningSWAL(title: string, text: string) {
    Swal.fire({
      title: title,
      text: text,
      icon: 'warning',
      confirmButtonText: 'OK'
    })
  }

  infoSWAL(title: string, text: string) {
    Swal.fire({
      title: title,
      text: text,
      icon: 'info',
      confirmButtonText: 'OK'
    })
  }

  questionSWAL(title: string, text: string) {
    Swal.fire({
      title: title,
      text: text,
      icon: 'question',
      confirmButtonText: 'OK'
    })
  }

  confirmSWAL(title: string, text: string) {
    return Swal.fire({
      title: title,
      text: text,
      icon: 'success',
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'No'
    })
  }

  questionConfirmSWAL(title: string, text: string) {
    return Swal.fire({
      title: title,
      text: text,
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: '<i class="fa fa-check"></i>' +' Yes',
      cancelButtonText: 'No',
      confirmButtonColor: title.toUpperCase() == 'DELETE' ? '#ce0101' : '#6631b6',
    })
  }
}
