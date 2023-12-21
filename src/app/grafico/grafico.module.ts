import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { GraficoComponent } from './grafico.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports:[CommonModule],
  declarations: [GraficoComponent],
  exports: [GraficoComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class GraficoModule {}