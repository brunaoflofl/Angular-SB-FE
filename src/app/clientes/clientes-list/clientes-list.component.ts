import { Component, OnInit } from '@angular/core';
import { Cliente } from '../cliente';
import { ClientesService } from 'src/app/clientes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-clientes-list',
  templateUrl: './clientes-list.component.html',
  styleUrls: ['./clientes-list.component.css']
})
export class ClientesListComponent implements OnInit {

  clientes: Cliente[] = [];

  constructor(private service: ClientesService, private router: Router) { }

  ngOnInit(): void {
    this.service
      .getClientes()
      .subscribe(
        resposta => this.clientes = resposta 
      );
  }

  novoCadastro(){
    this.router.navigate(['/clientes-form'])
  }

}
