import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { SendformService } from './sendform.service';

@Injectable({
  providedIn: 'root'
})
export class GuardiaGuard implements CanActivate {
  constructor(private sendFormService: SendformService, private router:Router){
  }
  canActivate(){
    if ( this.sendFormService.prendiSubject().value.length>0) {
      return true
    }
    else{
       return this.router.navigateByUrl('/')
    }
}

}
