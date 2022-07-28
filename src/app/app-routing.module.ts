import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormgiocatoriComponent } from './components/formgiocatori/formgiocatori.component';
import { TombolaComponent } from './components/tombola/tombola.component';
import { GuardiaGuard } from './guardia.guard';

const routes: Routes = [
  {
    component: FormgiocatoriComponent,
    path:''
  },
  {
    component: TombolaComponent,
    path: 'tombola',
    canActivate: [GuardiaGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
