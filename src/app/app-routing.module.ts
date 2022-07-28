import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormgiocatoriComponent } from './components/formgiocatori/formgiocatori.component';
import { TombolaComponent } from './components/tombola/tombola.component';
const routes: Routes = [
  {
    component: FormgiocatoriComponent,
    path:''
  },
  {
    component: TombolaComponent,
    path: 'tombola'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
