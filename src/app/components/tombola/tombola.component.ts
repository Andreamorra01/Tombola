import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
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

  numeriDisponiili : number[] = []
  isReset = false
  giocatori : number[] = []
  numeroGiocatori :number = 0

  constructor(private cdRef: ChangeDetectorRef) {
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
    this.isReset = true
    this.numeriDisponiili = []
    this.generaDisponibili()
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
    // console.log("INDICE DA ELIMINARE: " + indiceDaEliminare)
    // console.log("VETTORE AGGIORNATO: " + this.numeriDisponiili);
    this.vettoreNumeriEstratti.push(this.numeroEstratto)
    console.log(this.vettoreNumeriEstratti)
    console.log("LUNGHEZZA: " + this.numeriDisponiili.length)
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
    for (let item = 1 ; item <= this.numeroGiocatori ; item++) {
      this.giocatori.push(item)
      console.log(item);
    }
  }

}

