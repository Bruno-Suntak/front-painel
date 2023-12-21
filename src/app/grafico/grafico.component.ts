import { Component, OnInit } from '@angular/core';
import { GraficoService } from '../grafico.service';

@Component({
  selector: 'app-grafico',
  templateUrl: './grafico.component.html',
  styleUrls: ['./grafico.component.css']
})
export class GraficoComponent implements OnInit {

  chartData: {
    labels: string[];
    datasetLabel: string;
    datasetData: number[];
    datasetBackgroundColor: string[];
    datasetBorderColor: string[];
  } = {
    labels: ['Categoria 1', 'Categoria 2', 'Categoria 3'],
    datasetLabel: 'Contagem',
    datasetData: [10, 20, 15],
    datasetBackgroundColor: [
      'rgba(255, 99, 132, 0.5)',
      'rgba(54, 162, 235, 0.5)',
      'rgba(255, 206, 86, 0.5)',
    ],
    datasetBorderColor: [
      'rgba(255, 99, 132, 1)',
      'rgba(54, 162, 235, 1)',
      'rgba(255, 206, 86, 1)',
    ],
  };

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