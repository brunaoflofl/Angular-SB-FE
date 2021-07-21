import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TemplateModule } from './template/template.module';
import { HomeComponent } from './home/home.component'
import { ClientesModule } from './clientes/clientes.module';
import { ClientesService } from './clientes.service';
import { HttpClientModule } from '@angular/common/http';
import { ServicoprestadoModule } from './servicoprestado/servicoprestado.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    TemplateModule,
    ClientesModule,
    ServicoprestadoModule
  ],
  providers: [
    ClientesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
