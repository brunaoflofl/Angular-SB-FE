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
  clienteSelecionado: Cliente;
  mensagemSuccess: String;
  mensagemError: String;

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

  preparaDelecao(cliente: Cliente){
    this.clienteSelecionado = cliente;
  }
  deletarCliente(){
    this.service
      .deletar(this.clienteSelecionado)
      .subscribe(
        response => {
          this.mensagemSuccess = 'Cliente deletado com sucesso!'
          this.ngOnInit();
        },
        erro => this.mensagemError = 'Ocorreu um erro ao deletar o cliente.'
      )
  }
  
}
