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
