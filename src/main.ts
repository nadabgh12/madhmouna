import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';
import { provideTranslations } from '././translate.config';

bootstrapApplication(AppComponent, {
  ...appConfig,
  providers: [
    ...(appConfig.providers || []), // pour fusionner si tu as déjà d'autres providers
    ...provideTranslations
  ]
}).catch(err => console.error(err));
