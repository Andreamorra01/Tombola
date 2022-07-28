import { Component, OnInit,Input,SimpleChanges, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-scheda',
  templateUrl: './scheda.component.html',
  styleUrls: ['./scheda.component.scss']
})
export class SchedaComponent implements OnInit {
  colsCartella = 5;
  rowsCartella = 3;
  heightCartella = '40px';


  cartella : number[] = []
  titleCartella = 'Cartella';
  numeriEstrattiCartella:number[] = []
  @Input() nickname : string = ""
  @Input() numeroEstratto : number = 0 ;
  @Input() isReset : boolean = false;
  @Output() cartellaCambiata: EventEmitter<boolean> = new EventEmitter()
  @Output() nomeVincitore: EventEmitter<string> = new EventEmitter()

  constructor() {
    this.setStyle('--rowsCartella', this.rowsCartella);
    this.setStyle('--colsCartella', this.colsCartella);
    this.setStyle('--heightCartella', this.heightCartella);
  }
  setStyle(s: any, v: any) {
    document.documentElement.style.setProperty(s, v);
  }

  ngOnInit(): void {
    this.generaCartella()
    console.log("SONO NEL FIGLIO. RESET -> " + this.isReset)
  }

  generaCartella() {
    this.cartella = []
    console.log("STO GENERANDO");

    let isEsistente = true
    let random = 0
    for (let item = 0 ; item < 15 ; item++) {
      random = 1 + Math.floor(Math.random() * 90)
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

  ngOnChanges(changes:SimpleChanges){
    console.log(changes);

    if(changes['numeroEstratto']) {
      if(changes['numeroEstratto'].currentValue){
        for (let el = 0; el < this.cartella.length; el++) {
          if (changes['numeroEstratto'].currentValue === this.cartella[el])
            this.numeriEstrattiCartella.push(changes['numeroEstratto'].currentValue)
            // console.log(this.numeriEstrattiCartella);
            console.log(changes['numeroEstratto'].currentValue);
        }
        if (this.numeriEstrattiCartella.length == 15) {
          alert("Ha vinto il giocatore " + this.nickname)
          // console.log(this.numeriEstrattiCartella);
          this.nomeVincitore.emit(this.nickname)
        }
      }
    }

    if(changes['isReset']) {
      if(changes['isReset'].currentValue) {
        this.generaCartella()
        this.numeriEstrattiCartella = []
        this.cartellaCambiata.emit(true);
        console.log(this.cartella);
      }
    }

  }
  // registrazioneNome(e : any) {
  //   this.nickname = e.target.value
  // }
}
