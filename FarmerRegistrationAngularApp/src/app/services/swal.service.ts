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

  successSWALNoButton(title: string, text: string) {
    Swal.fire({
      position: "center",
      icon: "success",
      title: title,
      text: text,
      showConfirmButton: false,
      timer: 2000
    });
  }

  successConfirmSWAL(title: string, text: string) {
    return Swal.fire({
      title: title,
      text: text,
      icon: 'success',
      confirmButtonText: 'Yes',
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

  confirmInfoSWAL(title: string, text: string) {
    return Swal.fire({
      title: title,
      text: text,
      icon: 'info',
      showCancelButton: true,
      confirmButtonText: 'Login'
    })
  }

  questionConfirmSWAL(title: string, text: string) {
    return Swal.fire({
      title: title,
      text: text,
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Yes, Confirm!',
      cancelButtonText: 'No',
      confirmButtonColor: title.toUpperCase() == 'DELETE' ? '#ce0101' : '#6631b6',
    })
  }

  wardOccupyingAlert(res: any, selectedWardDetails: any) {
    const wardName = selectedWardDetails.wardName;
    const bedGiven = res.data.bedGiven;
    const bedOccupied = Number(res.data.bedOccupied) + 1;

    Swal.fire({
      title: 'Ward Status',
      html: `The total bed strength of the ward:
    <b style="color: #044c80">${wardName}</b> is
    <b style="color: #e50101">${bedGiven}</b>,
    but you are trying to occupy :
    <b style="color: #e50101">${bedOccupied}</b>`,
      icon: 'info'
    });
  }

  confirmWardOccupyingAlert(res: any, selectedWardDetails: any) {
    const wardName = selectedWardDetails.wardName;
    const bedGiven = res.data.bedGiven;
    const bedOccupied = Number(res.data.bedOccupied) + 1;

    return Swal.fire({
      title: 'Ward Status',
      html: `The total bed strength of the ward:
    <b style="color: #044c80">${wardName}</b> is
    <b style="color: #e50101">${bedGiven}</b>,
    but you are trying to occupy :
    <b style="color: #e50101">${bedOccupied}</b>`,
      icon: 'info',
      showCancelButton: true,
      confirmButtonText: 'Yes, Confirm!',
      cancelButtonText: 'No',
      confirmButtonColor: '#6631b6',
    });
  }

  confirmSuccessManualSWAL(title: string, text: string, confirm: string, cancel: string) {
    return Swal.fire({
      title: title,
      text: text,
      icon: 'success',
      showCancelButton: true,
      confirmButtonText: confirm,
      cancelButtonText: cancel
    })
  }
}
