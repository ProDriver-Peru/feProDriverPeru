import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';

import { AppModule } from './app/app.module';
import { environment } from './environment/environment';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
