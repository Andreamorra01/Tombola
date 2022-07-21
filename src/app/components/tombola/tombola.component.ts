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
    console.log(this.vettoreNumeriEstratti.length)
    this.prova()
  }

  prova() {
    for (let i = 0 ; i < this.vettoreNumeriEstratti.length ; i++) {
      console.log("ciao")
    }
  }

  estrazione() {
    this.numeroEstratto = 1 + Math.floor(Math.random() * 90)
    for (let item = 0 ; item < this.vettoreNumeriEstratti.length ; item++) {
      if (this.numeroEstratto != this.vettoreNumeriEstratti[item]) {
        this.vettoreNumeriEstratti.push(this.numeroEstratto)
      }
      console.log("ITEM: " + item)
    }
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
