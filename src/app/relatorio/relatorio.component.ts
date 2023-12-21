import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RelatorioService } from '../relatorio.service';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-relatorio',
  templateUrl: './relatorio.component.html',
  styleUrls: ['./relatorio.component.css']
})
export class RelatorioComponent implements OnInit {
  dadosRelatorio: any[] = [];

  constructor(private relatorioService: RelatorioService, private httpClient: HttpClient) {}

  ngOnInit() {
    this.carregarRelatorio();
  }

  carregarRelatorio() {
    this.relatorioService.obterDadosRelatorio().subscribe(
      (dados: any[]) => {
        this.dadosRelatorio = dados;
      },
      error => {
        console.error('Erro ao obter dados do relatório', error);
      }
    );
  }

  exportarExcel(): void {
    const dadosExportacao: any[] = [];
    this.dadosRelatorio.forEach(item => {
      dadosExportacao.push({
        Data: item.data,
        Gestor: item.gestor,
        Colaborador: item.colaborador,
        Cliente: item.cliente,
        Produto: item.produto
      });
    });

    const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(dadosExportacao);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Relatorio');

    // Salvar o arquivo
    XLSX.writeFile(wb, 'relatorio.xlsx');
  }
}