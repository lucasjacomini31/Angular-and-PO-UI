import { ServicoRestService } from './servico-rest.service';
import { RouterLink, Router } from '@angular/router';
import { Component } from '@angular/core';

import { PoMenuItem } from '@po-ui/ng-components';
import { PoDialogService, PoNotificationService, PoToolbarAction, PoToolbarProfile } from '@po-ui/ng-components';
import { NgIf } from '@angular/common';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  user = '';

  readonly menus: Array<PoMenuItem> = [
    { label: 'Login', link: '/' },

  ];

  notificationActions: Array<PoToolbarAction> = [
    {
      icon: 'po-icon-news',
      label: 'Atualizações',
      type: 'danger',
      action: item => this.onClickNotification(item)
    },
    { icon: 'po-icon-message', label: 'Mensagens', type: 'danger', action: item => this.openDialog(item) }
  ];

  profile: PoToolbarProfile = {
    avatar: 'https://via.placeholder.com/48x48?text=AVATAR',
    subtitle: 'admin@hotmail.com',
    title: 'admin'
  };

  profileActions: Array<PoToolbarAction> = [
    { icon: 'po-icon-user', label: 'Usuário', url: 'visual' },
    { icon: 'po-icon-settings', label: 'Opções', action: item => this.showAction(item) },
    { icon: 'po-icon-exit', label: 'Sair', type: 'danger', separator: true, action: item => this.exit() }
  ];

  // login padrão
  login: PoToolbarProfile = {
    subtitle: '',
    title: ''
  };

  loginActions: Array<PoToolbarAction> = [
    { icon: 'po-icon-user', label: 'Login', url: '/' }
  ];

// -------------------------
  title: string = 'TOTVS';

  constructor(private poDialog: PoDialogService,
              private poNotification: PoNotificationService,
              private rest: ServicoRestService) { this.teste();}

  getNotificationNumber() {
    return this.notificationActions.filter(not => not.type === 'danger').length;
  }

  onClickNotification(item: PoToolbarAction) {
    window.open('https://github.com/po-ui/po-angular/blob/master/CHANGELOG.md', '_blank');

    item.type = 'default';
  }

  openDialog(item: PoToolbarAction) {
    this.poDialog.alert({
      title: 'Bem Vindo',
      message: `Ola Usuário`,
      ok: undefined
    });

    item.type = 'default';
  }

  showAction(item: PoToolbarAction): void {
    this.poNotification.success(`: ${item.label}`, );
  }

  funclogin(item: PoToolbarAction): void {
    window.open('login');
  }

  exit(){
    this.user = '';
  }

  teste(){
    return this.user = this.rest.teste;
  }


}
