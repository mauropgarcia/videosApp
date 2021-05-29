import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { IFilme } from '../models/iFilme.model';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  titulo='Videos APP';
  listaVideos: IFilme[] = [
    {
      nome: 'Falcão e o Soldado Invernal (2021)',
      lancamento: '19/03/2021',
      duracao: '2h15m',
      classificacao: 76,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/w8Hi3GI4q1oR6EImrDWrAQFn8Ha.jpg',
      generos: ['Ação', 'Drama', 'Guerra']
    },
    {
      nome: 'Jurassic World: Acampamento Jurássico (2020)',
      lancamento: '05/10/2020',
      duracao: '1h24m',
      classificacao: 78,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/kClnDGBEXkiiXK5IZ1BY0VgoPhK.jpg',
      generos: ['Kids', 'Animação', 'Aventura']
    },
    {
      nome: 'Lobo Guerreiro 2 (2017)',
      lancamento: '01/07/2017',
      duracao: '2h4m',
      classificacao: 66,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/nJ8V8eOLWEKnZjvRZkyI8BRMKDf.jpg',
      generos: ['Guerra', 'Ação', 'Drama']
    },
    {
      nome: 'O Conto da Aia (2018)',
      lancamento: '30/04/2018',
      duracao: '0h50m',
      classificacao: 82,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/2rK53k6Lg6IDqHM7xp8OTzzzpz7.jpg',
      generos: ['Fantasia', 'Drama']
    },
    {
      nome: 'A Sentilnela (2021)',
      lancamento: '10/03/2021',
      duracao: '1h20m',
      classificacao: 60,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/56Z9eh4k9pzR6Yhy201nq2Qoa0n.jpg',
      generos: ['Thriller', 'Drama', 'Ação']
    }
  ];
  constructor(public alertController: AlertController, public toastController: ToastController) {}

  async exibirAletaFavorito() {
    const alert = await this.alertController.create({
      header: 'Alerta de confirmação!',
      message: 'Deseja realmente favoritar este filme?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Sim, favoritar',
          handler: () => {
            console.log('Confirm Okay');
            this.apresentarToast();
          }
        }
      ]
    });
    await alert.present();
  }

  async apresentarToast() {
    const toast = await this.toastController.create({
      message: 'Filme adicionado aos favoritos',
      duration: 2000,
      color:'success'
    });
    toast.present();
  }

}
