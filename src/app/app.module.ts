import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TombolaComponent } from './components/tombola/tombola.component';
import { SchedaComponent } from './components/scheda/scheda.component';

@NgModule({
  declarations: [
    AppComponent,
    TombolaComponent,
    SchedaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
