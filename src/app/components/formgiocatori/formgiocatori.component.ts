import { SendformService } from './../../sendform.service';
import { Component, OnInit } from '@angular/core';
import { myFormArray } from '../arrayForm';
import { FormArray, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
//

@Component({
  selector: 'app-formgiocatori',
  templateUrl: './formgiocatori.component.html',
  styleUrls: ['./formgiocatori.component.css']
})
export class FormgiocatoriComponent implements OnInit {
  fb: any = myFormArray()
  newArrayForm : any
  giocatori : number = 0

  constructor(private router : Router, private messageService: SendformService) { }
  getName(){
    this.newArrayForm = this.fb.get('name') as FormArray
    console.log(this.newArrayForm);
}
  addName(){
    let nameForm = new FormControl("", [Validators.required, Validators.minLength(3)])
    this.newArrayForm.push(nameForm)
    this.giocatori++
    console.log("ci sono " +this.giocatori);

    console.log(this.newArrayForm.value);
  }

  removeName() {
    console.log("REMOVE " + this.newArrayForm.value)
    this.newArrayForm.push(1)
    this.giocatori--

    console.log("REMOVE " + this.newArrayForm)
  }

  sendForm(){
    this.messageService.sendMessage(this.newArrayForm.value)
    this.router.navigateByUrl('/tombola',)
  }

  ngOnInit(): void {
    this.getName()
  }

}
