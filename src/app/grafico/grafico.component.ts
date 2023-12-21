import { Component, OnInit } from '@angular/core';
import { GraficoService } from '../grafico.service';

@Component({
  selector: 'app-grafico',
  templateUrl: './grafico.component.html',
  styleUrls: ['./grafico.component.css']
})
export class GraficoComponent implements OnInit {
  dadosGrafico: any[] = [];

  constructor(private graficoService: GraficoService) {}

  ngOnInit() {
    this.carregarGrafico();
  }

  carregarGrafico() {
    this.graficoService.obterDadosGrafico().subscribe(
      (dados: any[]) => {
        this.dadosGrafico = dados;
      },
      error => {
        console.error('Erro ao obter dados do gráfico', error);
      }
    );
  }
}