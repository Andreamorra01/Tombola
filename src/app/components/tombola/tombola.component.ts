import { Component, OnInit } from '@angular/core';
import { bindCallback } from 'rxjs';

@Component({
  selector: 'app-tombola',
  templateUrl: './tombola.component.html',
  styleUrls: ['./tombola.component.css']
})

export class TombolaComponent implements OnInit {
  cols = 10;
  rows = 9;
  height = '15%';
  title = 'Tombola';

  colsCartella = 5;
  rowsCartella = 3;
  heightCartella = '45%';
  titleCartella = 'Cartella';

  isPresente : boolean = true
  numeroEstratto : number = 0
  numeri : number[] = [];
  vettoreNumeriEstratti : number[] = []
  cartella : number[] = []
  vettoreVittoria : number[] = []

  numeriDisponiili : number[] = []

  constructor() {
    this.setStyle('--rows', this.rows);
    this.setStyle('--cols', this.cols);
    this.setStyle('--height', this.height);
    this.setStyle('--rowsCartella', this.rowsCartella);
    this.setStyle('--colsCartella', this.colsCartella);
    this.setStyle('--heightCartella', this.heightCartella);
  }
  setStyle(s: any, v: any) {
    document.documentElement.style.setProperty(s, v);
  }

  ngOnInit(): void {
    this.generaDisponibili()
    this.riempiTabellone()
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
  }

  estrazione() {
    //this.numeroEstratto = Math.floor(Math.random() * this.numeriDisponiili.length)
    let indiceDaEliminare = 0
    indiceDaEliminare = Math.floor(Math.random() * this.numeriDisponiili.length)
    this.numeroEstratto = this.numeriDisponiili.splice(indiceDaEliminare, 1)[0]
    // console.log("INDICE DA ELIMINARE: " + indiceDaEliminare)
    // console.log("VETTORE AGGIORNATO: " + this.numeriDisponiili);
    this.vettoreNumeriEstratti.push(this.numeroEstratto)
    console.log(this.vettoreNumeriEstratti)
  }

  controllo(valoreDaControllare: number) {
    for (let item = 0 ; item < this.vettoreNumeriEstratti.length ; item++) {
      if (this.vettoreNumeriEstratti[item] == valoreDaControllare)
        return 'red';
    }
    return 'black'
  }

}

