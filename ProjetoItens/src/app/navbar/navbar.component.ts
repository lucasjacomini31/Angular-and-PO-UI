
import { Component, OnInit, ElementRef } from '@angular/core';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  teste: string;
  teste1: string;

  data =  Date.now();
  constructor(private elementRef: ElementRef) { }

  ngOnInit(): void {
    this.teste = this.elementRef.nativeElement.querySelector('.progress-bar');
    this.teste1 = this.elementRef.nativeElement.querySelector('.progress');
    this.teste1["style"].display = "inline";
    this.teste["style"].width = "0%";
    this.atualizar();
  }

  atualizar(){
      setTimeout(() => this.teste["style"].width = "25%" , 50);
      setTimeout(() => this.teste["style"].width = "50%" , 100);
      setTimeout(() => this.teste["style"].width = "75%" , 150);
      setTimeout(() => this.teste["style"].width = "100%" , 200);
      setTimeout(() => this.teste1["style"].display = "none", 250);

    }

}
