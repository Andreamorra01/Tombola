import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-scheda',
  templateUrl: './scheda.component.html',
  styleUrls: ['./scheda.component.css']
})
export class SchedaComponent implements OnInit {
  cartella : number[] = []
  titleCartella = 'Cartella';
  numeriEstrattiCartella:number[] = []

  @Input() numeroEstratto:number = 0 ;


  constructor() { }

  ngOnInit(): void {
    this.generaCartella()
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
  coloraNumeriEstrattiCartella(elemento : any) {
    let isEstratto = false
    // console.log(elementoCliccato)
    for (let item = 0 ; item < this.numeriEstrattiCartella.length ; item++) {
      if (elemento == this.numeriEstrattiCartella[item]) {
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

  controllaNumeriEstratti(){
    for (let el = 0; el < this.cartella.length; el++) {
      if (this.numeroEstratto == this.cartella[el])
        this.numeriEstrattiCartella.push(this.numeroEstratto)
        console.log(this.numeriEstrattiCartella);


    }
  }
}
