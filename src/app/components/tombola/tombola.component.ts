import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tombola',
  templateUrl: './tombola.component.html',
  styleUrls: ['./tombola.component.css']
})

export class TombolaComponent implements OnInit {
  cols = 10;
  rows = 9;
  height = '100%';
  title = 'Tombola';

  isPresente : boolean = true
  numeroEstratto : number = 0
  numeri : number[] = [];
  vettoreNumeriEstratti : number[] = [0]

  constructor() {
    this.setStyle('--rows', this.rows);
    this.setStyle('--cols', this.cols);
    this.setStyle('--height', this.height);
  }

  ngOnInit(): void {
    this.riempiTabellone()
  }

  estrazione() {
    this.numeroEstratto = 1 + Math.floor(Math.random() * 90)
    for (let item = 0 ; item < this.vettoreNumeriEstratti.length ; item++) {
      if (this.numeroEstratto == this.vettoreNumeriEstratti[item]) {
        this.isPresente = true
        break;
      }else{
        this.isPresente = false
      }
      // console.log("ITEM: " + item)
    }
    if(!this.isPresente)
      this.vettoreNumeriEstratti.push(this.numeroEstratto)

    console.log(this.vettoreNumeriEstratti)
  }

  riempiTabellone() {
    for (let item = 1 ; item < 91 ; item ++) {
      this.numeri.push(item)
    }
  }

  setStyle(s: any, v: any) {
    document.documentElement.style.setProperty(s, v);
  }

  // toggleActive(e) {
  //   e.target.classList.toggle('active');
  // }
}
