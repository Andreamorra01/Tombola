import { SendformService } from './../../sendform.service';
import { Component, OnInit } from '@angular/core';
import { myFormArray } from '../arrayForm';
import { FormArray, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { arrayName } from 'src/mock-names';
import { map, Observable } from 'rxjs';
//

@Component({
  selector: 'app-formgiocatori',
  templateUrl: './formgiocatori.component.html',
  styleUrls: ['./formgiocatori.component.css']
})
export class FormgiocatoriComponent implements OnInit {
  fb: any = myFormArray()
  newArrayForm : any
  giocatori : number = 1

  vettoreNomi = arrayName

  constructor(private router : Router, private messageService: SendformService) { }
  getName(){
    this.newArrayForm = this.fb.get('name') as FormArray
    console.log(this.newArrayForm);
}
  addName(){
    let nameForm = new FormControl("", [Validators.required, Validators.minLength(3)])

    let filteredOptions: Observable<string[]>;
    filteredOptions = nameForm.valueChanges.pipe(
      map(value => this._filter(value || '')),
    );

    this.newArrayForm.push(nameForm)
    this.giocatori++
    console.log(this.newArrayForm.value);
    // console.log(this.fb.invalid);
    console.log(this.giocatori);

  }

 _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.vettoreNomi.filter(nome => nome.toLowerCase().includes(filterValue));
 }

  removeName() {
    this.newArrayForm.removeAt(this.newArrayForm.length -1)
    this.giocatori--
    console.log(this.giocatori);
    console.log(this.newArrayForm.value)
  }
  sendForm(){
    this.messageService.sendMessage(this.newArrayForm.value)
    this.router.navigateByUrl('/tombola',)
  }
  ngOnInit(): void {
    this.getName()
  }



}
