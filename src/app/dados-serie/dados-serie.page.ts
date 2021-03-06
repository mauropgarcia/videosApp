import { ISerieApi } from './../models/iSerieAPI.model';
import { Component, OnInit } from '@angular/core';
import { DadosService } from './../services/dados.service';

@Component({
  selector: 'app-dados-serie',
  templateUrl: './dados-serie.page.html',
  styleUrls: ['./dados-serie.page.scss'],
})
export class DadosSeriePage implements OnInit {
  serie: ISerieApi;
  generos: string[]=[];
  constructor(public dadosService: DadosService) { }

  ngOnInit() {
    this.serie = this.dadosService.pegarDados('serie');
    this.generos = this.dadosService.pegarDados('generos');
  }

}
