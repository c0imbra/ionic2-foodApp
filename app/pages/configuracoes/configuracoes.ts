import {NavController, Page, Toast, Alert, Range} from 'ionic-angular';
import {Component} from '@angular/core';
import {HomePage} from '../home/home';
import {LoginPage} from '../login/login'

@Component({
    templateUrl: 'build/pages/configuracoes/configuracoes.html'
})

@Page({
    templateUrl: 'build/pages/configuracoes/configuracoes.html'
})

export class ConfiguracoesPage {

    structure: number = 5;

    constructor(public nav: NavController) {
    }

    SaveChanges(){
        const toast = Toast.create({
            message: 'Suas configurações foram salvas',
            showCloseButton: true,
            closeButtonText: 'Ok',
            duration: 1000,
            position: "bottom"
        });
        this.nav.present(toast);
    }

    DeleteAccount() {
        let alert = Alert.create({
            title: 'Excluir conta?',
            message: 'Nota: você não poderá recuperar sua conta.',
            inputs: [
                {
                    name: 'senha',
                    placeholder: 'Senha',
                    type: 'password'
                }
            ],
            buttons: [
                {
                    text: 'Cancelar',
                    role: 'cancel',
                    handler: data => {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Excluir',
                    handler: () => {
                        setTimeout(() => {
                            this.nav.setRoot(LoginPage);
                        }, 500)
                    }
                }
            ]
        });
        this.nav.present(alert);
    }
}
