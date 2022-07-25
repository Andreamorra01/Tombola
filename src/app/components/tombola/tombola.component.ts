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
    this.riempiTabellone()
    this.generaCartella()
  }
  riempiTabellone() {
    for (let item = 1 ; item < 91 ; item ++) {
      this.numeri.push(item)
    }
  }

  estrazione() {
    this.numeroEstratto = 1 + Math.floor(Math.random() * 15)
    for (let item = 0 ; item <= this.vettoreNumeriEstratti.length ; item++) {
      if (this.numeroEstratto == this.vettoreNumeriEstratti[item]) {
        this.isPresente = true
        break;
      }else{
        this.isPresente = false
      }
      // console.log("ITEM: " + item)
    }
    if(!this.isPresente) {
      this.vettoreNumeriEstratti.push(this.numeroEstratto)
      this.vittoria(this.numeroEstratto)
    }
    // console.log(this.vettoreNumeriEstratti)
  }

  controllo(valoreDaControllare: number) {
    for (let item = 0 ; item < this.vettoreNumeriEstratti.length ; item++) {
      if (this.vettoreNumeriEstratti[item] == valoreDaControllare)
        return 'red';
    }
    return 'black'
  }

  generaCartella() {
    let isEsistente = true
    let random = 0
    for (let item = 0 ; item < 15 ; item++) {
      random = 1 + Math.floor(Math.random() * 15)
      // console.log("Numero Random: " + random)
      if (item == 0)
        this.cartella.push(random)
      else
        for (let index = 0 ; index < this.cartella.length ; index++) {
          if (random == this.cartella[index]) {
            isEsistente = true
            item--
            break;
          } else {
            isEsistente = false
          }
        }
        if (!isEsistente)
          this.cartella.push(random)
    }

  }

  controlloCartella(elemento : any) {
    let isEstratto = false
    // console.log(elementoCliccato)
    for (let item = 0 ; item < this.vettoreNumeriEstratti.length ; item++) {
      if (elemento == this.vettoreNumeriEstratti[item]) {
        isEstratto = true
        break;
      } else
        isEstratto = false
    }

    if (isEstratto)
      return 'red'
    else
      return 'black'
  }

  vittoria(numeroEstratto : number) {
    for (let item = 0 ; item < this.cartella.length ; item ++) {
      // for (let elem = 0 ; elem < this.vettoreNumeriEstratti.length ; elem++) {
        if (this.cartella[item] == numeroEstratto) {
          this.vettoreVittoria.push(this.cartella[item])
          // console.log(vettore)
        //}
      }
    }
    if (this.vettoreVittoria.length == 15) {
      alert("Hai vinto")
    }
  }
}

