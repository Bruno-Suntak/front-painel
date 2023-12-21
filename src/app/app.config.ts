import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { NgModule, Injector, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { appRoutes, routes } from './app.routes';
import { AppComponent }  from './app.component';
import { GraficoModule } from './grafico/grafico.module';
import { RelatorioModule } from './relatorio/relatorio.module';

NgModule({
  bootstrap: [AppComponent],
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    appRoutes,
    GraficoModule,
    RelatorioModule,
  ],
})

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes)]
};
