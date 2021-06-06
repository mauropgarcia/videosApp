import { IListaSeries } from './../models/iSerieAPI.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SerieService {
  lingua = 'pt-BR';
  regiao = 'BR';
  private apiURL = 'https://api.themoviedb.org/3/';
  private key='?api_key=8b61fbebd8ea87b77e1c4b30b03ba7dc';
  constructor(private http: HttpClient, public toastController: ToastController) { }

  buscarSeries(busca: string): Observable<IListaSeries> {
    const url = `${this.apiURL}search/tv${this.key}&language=${this.lingua}&include_adult=true&region=${this.regiao}&query=${busca}`;

    return this.http.get<IListaSeries>(url).pipe(
      map(retorno => retorno),
      catchError(erro => this.exibirErro(erro))
    );

   }
   async exibirErro(erro) {
    const toast = await this.toastController.create({
      message: 'Erro ao consultar a API!',
      duration: 2000,
      color: 'danger',
      position: 'middle'
    });
    toast.present();
    return null;
  }
}
