import { Tabella } from './../tombola/tombola.component';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-storico',
  templateUrl: './storico.component.html',
  styleUrls: ['./storico.component.css']
})
export class StoricoComponent implements OnInit {
  @Input() storicoPartite : Tabella[] = []

  colsStorico = 3;
  rowsStorico = this.storicoPartite.length;
  heightStorico = '35px';
  titleStorico = 'Storico';

  numeroPartita : any = this.storicoPartite

  constructor() {
    this.setStyle('--rowsStorico', this.rowsStorico);
    this.setStyle('--colsStorico', this.colsStorico);
    this.setStyle('--heightStorico', this.heightStorico);
  }

  setStyle(s: any, v: any) {
    document.documentElement.style.setProperty(s, v);
  }

  ngOnInit(): void {
  }

}

