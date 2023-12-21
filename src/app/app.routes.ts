import { Routes, RouterModule } from '@angular/router';
import { PainelComponent } from './painel/painel.component';
import { RelatorioComponent } from './relatorio/relatorio.component';
import { GraficoComponent } from './grafico/grafico.component';

export const routes: Routes = [
  { path: '', redirectTo: '/painel', pathMatch: 'full' },
  { path: 'painel', component: PainelComponent },
  { path: 'relatorio', component: RelatorioComponent },
  { path: 'grafico', component: GraficoComponent },
];

export const appRoutes = RouterModule.forRoot(routes);