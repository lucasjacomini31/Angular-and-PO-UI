import { Prod } from './prod';
import { RestService } from '../../rest.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lojahome',
  templateUrl: './lojahome.component.html',
  styleUrls: ['./lojahome.component.css']
})

export class LojahomeComponent implements OnInit {
  height = 400;
  action: string;
  label: string;
  produto: Prod[] = [];


  constructor(private rest: RestService) {}

  ngOnInit(): void {
    this.produto = [

        {
          id: 1,
          name: 'Mouse',
          price: 12.99,
          imageUrl: '../../assets/images/mouse.png',
        },
        {
          id: 2,
          name: 'Teclado',
          price: 12.99,
          imageUrl: '',
        },
        {
          id: 3,
          name: 'HeadSet',
          price: 12.99,
          imageUrl: '',
        },
        {
          id: 4,
          name: 'Monitor',
          price: 12.99,
          imageUrl: '',
        },
    ];
  }


  info(){
    window.location.href = 'info';
  }

  help(){
    window.location.href = 'info';
  }

  showAngular() {
    window.location.href = '/buy';
  }
}
