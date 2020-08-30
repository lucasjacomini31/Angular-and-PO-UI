
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GriditensComponent } from './griditens/griditens.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { ServicoRestService } from './servico-rest.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { VisualizaritensComponent } from './visualizaritens/visualizaritens.component';
import { Error404Component } from './error404/error404.component';
import { PoModule } from '@po-ui/ng-components';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PoTemplatesModule } from '@po-ui/ng-templates';



@NgModule({
  declarations: [
    AppComponent,
    GriditensComponent,
    NavbarComponent,
    VisualizaritensComponent,
    Error404Component,
    LoginComponent
  ],
  imports: [
    PoTemplatesModule,
    BrowserModule,
    AppRoutingModule,
    NgxPaginationModule,
    HttpClientModule,
    FormsModule,
    PoModule,
    RouterModule.forRoot([])
  ],
  providers: [ServicoRestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
