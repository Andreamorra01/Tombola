import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TombolaComponent } from './components/tombola/tombola.component';
import { SchedaComponent } from './components/scheda/scheda.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormgiocatoriComponent } from './components/formgiocatori/formgiocatori.component';
import { StoricoComponent } from './components/storico/storico.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatAutocompleteModule, } from '@angular/material/autocomplete';
import {MatFormFieldModule} from '@angular/material/form-field';


@NgModule({
  declarations: [
    AppComponent,
    TombolaComponent,
    SchedaComponent,
    FormgiocatoriComponent,
    StoricoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatAutocompleteModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
