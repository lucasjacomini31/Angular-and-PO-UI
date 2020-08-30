import { Itens } from './../models/placeholder.model';
import { ServicoRestService } from './../servico-rest.service';
import { Component, OnInit, Input  } from '@angular/core';

//po-ui


@Component({
  selector: 'app-griditens',
  templateUrl: './griditens.component.html',
  styleUrls: ['./griditens.component.css']
})




export class GriditensComponent implements OnInit {

  mandar: number = 20;
  pag: number = 1 ;
  contador: number = 20;
  _itens: Itens[] = [];
  erro: any;
  id: string;
  nome = 'itCodigo';
  padrao = '20';

  columns = [
    { property: 'itCodigo', label: 'Código' },
    { property: 'descItem', label: 'Descrição' }
  ];

  public items = [
  ];

  isUndelivered(row, index: number) {
    return row.status !== 'delivered';
  }



  constructor(private rest: ServicoRestService) {}

  ngOnInit(): void {
    this.listar();
  }

   set page(valord: string ){
     this.pag = 1;
     console.log('Valor: ' + valord);
     this.rest.getItensPageSize(valord).subscribe(
      (dados: Itens) => {
        if (dados != null){
          this._itens = dados["retorno"]["itens"];
        }
      }
    );
   }

   get page(){
    return this.padrao;
  }

  listar(){
    this.rest.getItens().subscribe(
      (dados: Itens) => {
        this._itens = dados["retorno"]["itens"];
    },
      (error): any => {
        this.erro = error;

    });
  }


   set buscar(valor: string){
    this.pag = 1;
    this.id = valor;
    this.rest.getItensID(valor , this.nome).subscribe(
        (dados: Itens) => {
          if (dados != null){
            this._itens = dados["retorno"]["itens"];
          }
        }
    );
  }


  set valor(valordesc: string){
    this.nome =  valordesc;
  }

  get valor(){
    return this.nome;
  }

  showMore() {
      this.mandar = this.mandar + 20;
      this.pag = 1;
      this.rest.getItensPageSize(this.mandar).subscribe(
        (dados: Itens) => {
          if (dados != null){
            this._itens = dados["retorno"]["itens"];
          }
        }
    );
  }
}
