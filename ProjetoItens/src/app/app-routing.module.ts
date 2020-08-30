import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GriditensComponent } from './griditens/griditens.component';
import { VisualizaritensComponent } from './visualizaritens/visualizaritens.component';
import { Error404Component } from './error404/error404.component';



const routes: Routes = [
  {
    path: '', component: LoginComponent
  },
  {
    path: 'visual', component: VisualizaritensComponent
  },
  {
    path: 'home', component: GriditensComponent
  },
  {
    path: '**', component: Error404Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
