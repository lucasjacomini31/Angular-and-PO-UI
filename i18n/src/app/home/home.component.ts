import { RestService } from './../rest.service';
import { Component, OnInit } from '@angular/core';
import { PoI18nService, PoNotificationService, PoDialogService } from '@po-ui/ng-components';




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  var: string;
  literals = {};
  defalt = 'pt-BR';
  coin = {};
  voltar: number;
  padrão: number;
  teste;

  notification: string;
  constructor(private poI18nService: PoI18nService,
              private rest: RestService,
              public  poNotification: PoNotificationService,
              public  poDialog: PoDialogService) {

  }


    ngOnInit(): void {
      this.carregarAll();
      this.poI18nService.getLiterals({context: 'general'})
      .subscribe((literals) => {
        this.literals = literals;
      });
    }


    set lang(valor){
    this.poI18nService.getLiterals({language: `${valor}`})
    .subscribe((literals) => {
      this.literals = literals;
    });
    }

    get lang(){
      return this.defalt;
    }

    carregarAll(){
      this.rest.getCoin().subscribe(dados => this.coin = dados);
    }


    set mandar(valor){
      this.voltar = valor;
      this.padrão = this.padrão = this.coin['USD'].low;
      if (this.voltar === 1){
        this.padrão = this.coin['USD'].low;
      }
      else{
        this.padrão = valor * this.coin['USD'].low;
      }
    }

    get mandar(){
      return this.voltar;
    }


    set receber(valor){
      this.voltar = 0;
      if (this.padrão === this.coin['USD'].low){
        this.voltar = 1;
      }
      else{
        this.voltar = valor /  this.coin['USD'].low;
      }
    }

    get receber(){

      return this.padrão;
    }

    set moedas(valor){
      if (valor === 'EUR') {
        this.teste = 'Euro é R$ '+ this.coin['EUR'].low + '' ;
      }
      else{
        this.teste = 'Dolar é R$ ' + this.coin['USD'].low + '';
      }
    }

}
