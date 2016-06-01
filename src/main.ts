import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { Angular22AppComponent, environment } from './app/';

if (environment.production) {
  enableProdMode();
}

bootstrap(Angular22AppComponent);

