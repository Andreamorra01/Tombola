import { SendformService } from './../../sendform.service';
import { FormArray, Validators, FormControl } from '@angular/forms';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { myFormArray } from '../arrayForm';
import { Location } from '@angular/common';

@Component({
  selector: 'app-tombola',
  templateUrl: './tombola.component.html',
  styleUrls: ['./tombola.component.scss']
})

export class TombolaComponent implements OnInit {
  cols = 10;
  rows = 9;
  height = '35px';
  title = 'Tabellone';
  isPresente : boolean = true
  numeroEstratto : number = 0
  numeri : number[] = [];
  vettoreNumeriEstratti : number[] = []
  numeriDisponiili : number[] = []
  isReset = false
  giocatori : number[] = []
  numeroGiocatori :number = 0
  storicoPartite : Tabella[] = []
  bottonoDisabilitato:boolean = false
  contatorePartite : number = 0
  contatoreMosse : number = 0
  data: any
  receivedMessage: string [] = []

  constructor(private cdRef: ChangeDetectorRef , private location:Location, private sendForm: SendformService) {
    this.setStyle('--rows', this.rows);
    this.setStyle('--cols', this.cols);
    this.setStyle('--height', this.height);
  }
  setStyle(s: any, v: any) {
    document.documentElement.style.setProperty(s, v);
  }

  riceviForm(){
    this.sendForm.receivedMessage().subscribe((d)=>{
      console.log(d);
      this.receivedMessage = d
    })
  }
  ngOnInit(): void {
    this.generaDisponibili()
    this.riempiTabellone()
    this.data = this.location.getState()
    console.log("sono qui nella tombola" +  this.data.value);
    this.riceviForm()
  }


  generaDisponibili(){
    for (let item = 1 ; item < 91 ; item++)
      this.numeriDisponiili.push(item)
    console.log("Numeri disponibili: " + this.numeriDisponiili)
  }

  riempiTabellone() {
    for (let item = 1 ; item < 91 ; item ++) {
      this.numeri.push(item)
    }
  }

  reset(){
    this.vettoreNumeriEstratti = []
    this.numeroEstratto = 0
    this.isReset = true
    this.numeriDisponiili = []
    this.generaDisponibili()
    this.giocatori = []
    this.contatoreMosse = 0
    this.bottonoDisabilitato = false
  }

  aggiornoReset() {
    setTimeout(() => {
     this.isReset = false
    }, 1000);

    this.cdRef.detectChanges();
  }

  estrazione() {
    let indiceDaEliminare = 0
    indiceDaEliminare = Math.floor(Math.random() * this.numeriDisponiili.length)
    this.numeroEstratto = this.numeriDisponiili.splice(indiceDaEliminare, 1)[0]
    this.vettoreNumeriEstratti.push(this.numeroEstratto)

    this.contatoreMosse++
    console.log("CONTATORE MOSSE EFFETTUATE: " + this.contatoreMosse)
  }

  controllo(valoreDaControllare: number) {
    for (let item = 0 ; item < this.vettoreNumeriEstratti.length ; item++) {
      if (this.vettoreNumeriEstratti[item] == valoreDaControllare)
        return 'red';
    }
    return 'black'
  }
  scegliNumeroGiocatori(e:any){
    this.numeroGiocatori = e.target.value
    console.log(this.numeroGiocatori)
  }
  giocatoriRegistrati() {
    this.giocatori = []
    for (let item = 1 ; item <= this.numeroGiocatori ; item++) {
      this.giocatori.push(item)
      console.log(item);
    }
  }

  stampaTabella(nome : string) {
    this.bottonoDisabilitato = true
    console.log("NOME VINCITORE: " + nome)
    this.contatorePartite++
    this.storicoPartite.push({
      numeroPartita : this.contatorePartite,
      nomeVincitore : nome,
      numeroMosse : this.contatoreMosse
    })
    this.cdRef.detectChanges();
    console.log(this.storicoPartite)
  }

}

export interface Tabella {
  numeroPartita : number,
  nomeVincitore : string,
  numeroMosse : number
}

