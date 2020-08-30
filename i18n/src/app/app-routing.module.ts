
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LojabuyComponent } from './Loja/lojabuy/lojabuy.component';
import { LojahomeComponent } from './Loja/lojahome/lojahome.component';

const routes: Routes = [
  {path: '' , component: HomeComponent},
  {path: 'loja' , component: LojahomeComponent},
  {path: 'buy' , component: LojabuyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
