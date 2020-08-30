
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PoModule } from '@po-ui/ng-components';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

import { PoI18nConfig, PoI18nModule, PoI18nService } from '@po-ui/ng-components';

import { generalEn } from './lang/general-en';
import { generalPt } from './lang/general-pt';
import { FormsModule } from '@angular/forms';

import { LojahomeComponent} from './Loja/lojahome/lojahome.component';
import { LojabuyComponent } from './Loja/lojabuy/lojabuy.component';


const i18nConfig: PoI18nConfig = {
  default: {
    language: 'pt-BR',
    context: 'general',
    cache: true
  },
  contexts: {
    general: {
      'pt-BR': generalPt,
      'en-US': generalEn
    }
  }
};



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LojahomeComponent,
    LojabuyComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    PoModule,
    PoI18nModule.config(i18nConfig),
    RouterModule.forRoot([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {


}
