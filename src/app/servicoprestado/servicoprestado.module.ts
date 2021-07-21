import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ServicoprestadoRoutingModule } from './servicoprestado-routing.module';
import { ServicoPrestadoFormComponent } from './servico-prestado-form/servico-prestado-form.component';
import { ServicoPrestadoListComponent } from './servico-prestado-list/servico-prestado-list.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    ServicoPrestadoFormComponent, 
    ServicoPrestadoListComponent
  ],
  imports: [
    CommonModule,
    ServicoprestadoRoutingModule,
    FormsModule,
    RouterModule
  ],
  exports: [
    ServicoPrestadoFormComponent, 
    ServicoPrestadoListComponent
  ]
})
export class ServicoprestadoModule { }
