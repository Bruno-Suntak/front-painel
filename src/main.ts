import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { AppComponent } from './app/app.component'; // Certifique-se de importar o componente aqui

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch((err) => console.error(err));