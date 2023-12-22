import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { GraficoService } from '../grafico.service';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-grafico',
  templateUrl: './grafico.component.html',
  styleUrls: ['./grafico.component.css']
})
export class GraficoComponent implements OnInit {
  @ViewChild("graficoCanvas", { static: true })
  elemento!: ElementRef;

  dadosGrafico: any[] = [];

  constructor(private graficoService: GraficoService) {}

  ngOnInit() {
;

    this.carregarGrafico();
  }

  carregarGrafico() {
    let data:any;
    let labels:any = [];
    let count:any = [];
    let chart:any;

    if (chart) chart.destroy()
    
    this.graficoService.obterDadosGrafico().subscribe(
      (dados: any[]) => {
        this.dadosGrafico = dados;

        for (let index = 0; index < this.dadosGrafico.length; index++) {
          const element = this.dadosGrafico[index];

          if (!element.name) break;
          if (!element.count) break;

          labels.push(element.name);

          count.push(element.count);

        }

        chart = new Chart(this.elemento.nativeElement, {
          type: 'bar',
          data: {
            labels: labels,
            datasets: [
              {
                data: count
              },
            ]
          },
          options: {
            plugins: {
              legend: {
                display: false
              }
            }
            
          }
        });
        
      },
      error => {
        console.error('Erro ao obter dados do gráfico', error);
      }
    );
  }
}