import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SendformService {
  private subject = new BehaviorSubject<string []>([]);

  constructor() { }
  sendMessage(message:string[]){
    this.subject.next(message)
  }
  prendiSubject() {
    return this.subject;
  }

  receivedMessage():Observable<string []> {
    return this.subject.asObservable();
  }
}
