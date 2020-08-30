import { ServicoRestService } from './../servico-rest.service';
import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  constructor(private rest: ServicoRestService) { }
  input: string;
  password: string;
  variavel: string ;

  ngOnInit(): void {
  }

  mandar(){
    this.variavel = '';
    if ((this.input === 'admin') && (this.password === 'admin')) {
      window.location.href = 'home';
      this.rest.teste = this.input;
    }
    else {
      this.variavel = 'teste';
    }
  }
}
