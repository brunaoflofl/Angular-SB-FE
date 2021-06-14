import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
//DEFINE AS ROTAS DA APLICAÇÃO, POREM: CADA MÓDULO DEFINE SUAS ROTAS.

const routes: Routes = [
  //rotas raizes da aplicação.
  { path: 'home', component:  HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
