import { NgModule } from '@angular/core';
import { RelatorioComponent } from './relatorio.component';
import { GraficoModule } from '../grafico/grafico.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [RelatorioComponent],
  imports: [GraficoModule, CommonModule],
})
export class RelatorioModule {}