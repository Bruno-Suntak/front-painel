import { NgModule, ApplicationRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { GraficoModule } from './grafico/grafico.module';
import { RelatorioModule } from './relatorio/relatorio.module';
import { AppComponent } from './app.component';
import { PainelComponent } from './painel/painel.component';
import { RelatorioComponent } from './relatorio/relatorio.component';
import { GraficoComponent } from './grafico/grafico.component';
import { CommonModule } from '@angular/common';
import { appRoutes } from './app.routes';

  @NgModule({
    imports: [
      CommonModule,
      BrowserModule,
      HttpClientModule,
      appRoutes,
      GraficoModule,
      RelatorioModule,
    ],
  })
  export class AppModule {
    ngDoBootstrap(appRef: ApplicationRef): void {
      appRef.bootstrap(AppComponent);
    }
  }