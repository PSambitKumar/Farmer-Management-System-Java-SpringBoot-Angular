import {EventEmitter, Injectable} from '@angular/core';
import {Observable, Subject, Subscription} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private message: Subject<string> = new Subject<string>();
  public message$: Observable<string> = this.message.asObservable();

  invokeFirstComponentFunction = new EventEmitter();
  subscription: any = Subscription;


  onFirstComponentButtonClick(icdData: any) {
    this.invokeFirstComponentFunction.emit({'icdData':icdData});
  }
  setMessage(newMessage: any) {
    this.message.next(newMessage);
  }

  private errorHandler(error: any) {
    this.message.next('Got an error')
  }
}
