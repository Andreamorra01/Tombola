import { Component, OnInit,Input, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-scheda',
  templateUrl: './scheda.component.html',
  styleUrls: ['./scheda.component.css']
})
export class SchedaComponent implements OnInit {
  colsCartella = 5;
  rowsCartella = 3;
  heightCartella = '45%';


  cartella : number[] = []
  titleCartella = 'Cartella';
  numeriEstrattiCartella:number[] = []

  @Input() numeroEstratto:number = 0 ;


  constructor() {
    this.setStyle('--rowsCartella', this.rowsCartella);
    this.setStyle('--colsCartella', this.colsCartella);
    this.setStyle('--heightCartella', this.heightCartella);
  }
  setStyle(s: any, v: any) {
    document.documentElement.style.setProperty(s, v);
  }

  ngOnInit(): void {
    // this.generaCartella()
  }

  // generaCartella() {
  //   let isEsistente = true
  //   let random = 0
  //   for (let item = 0 ; item < 15 ; item++) {
  //     random = 1 + Math.floor(Math.random() * 15)
  //     // console.log("Numero Random: " + random)
  //     if (item == 0)
  //       this.cartella.push(random)
  //     else
  //       for (let index = 0 ; index < this.cartella.length ; index++) {
  //         if (random == this.cartella[index]) {
  //           isEsistente = true
  //           item--
  //           break;
  //         } else {
  //           isEsistente = false
  //         }
  //       }
  //       if (!isEsistente)
  //         this.cartella.push(random)
  //   }
  // }
  // coloraNumeriEstrattiCartella(elemento : any) {
  //   let isEstratto = false


  //   for (let item = 0 ; item < this.numeriEstrattiCartella.length ; item++) {
  //     if (elemento == this.numeriEstrattiCartella[item]) {
  //       isEstratto = true
  //       break;
  //     } else
  //       isEstratto = false
  //   }

  //   if (isEstratto)
  //     return 'red'
  //   else
  //     return 'black'
  // }

// ngOnChanges(changes:SimpleChange){
//   console.log(changes);

//   for (let el = 0; el < this.cartella.length; el++) {
//     if (this.numeroEstratto === this.cartella[el])
//       this.numeriEstrattiCartella.push(this.numeroEstratto)
//       // console.log(this.numeriEstrattiCartella);
//       console.log(changes.currentValue);

//   }
//   if (this.numeriEstrattiCartella.length== 15) {
//     alert("hai vinto")

//   }
// }


  // controllaNumeriEstratti(){
  //   for (let el = 0; el < this.cartella.length; el++) {
  //     if (this.numeroEstratto == this.cartella[el])
  //       this.numeriEstrattiCartella.push(this.numeroEstratto)
  //       console.log(this.numeriEstrattiCartella);

  //   }
  // }
}
