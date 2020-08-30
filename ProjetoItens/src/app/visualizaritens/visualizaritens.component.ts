import { Itens } from './../models/placeholder.model';
import { ServicoRestService } from './../servico-rest.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PoModalComponent } from '@po-ui/ng-components';



@Component({
  selector: 'app-visualizaritens',
  templateUrl: './visualizaritens.component.html',
  styleUrls: ['./visualizaritens.component.css']
})
export class VisualizaritensComponent implements OnInit {



  userData = {
    'name': 'Teste',
    'email': 'Teste@hotmail.com',
    'photo': 'avatar2.png'
  };

  @ViewChild(PoModalComponent, { static: true }) poModal: PoModalComponent;

  openModal() {
    this.poModal.open();
  }

  constructor() { }

  ngOnInit(): void {

  }

}
