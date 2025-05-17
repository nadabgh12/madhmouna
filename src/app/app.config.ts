import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http'; // 👈 Importer ceci
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideToastr } from 'ngx-toastr';
export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    provideAnimationsAsync(),
        provideToastr({
          positionClass: 'toast-top-right',
          timeOut: 5000,
          progressBar: true,
          closeButton: true
        }) // 👈 Ajouter ce provider ici
  ]
};
