  import {ApplicationConfig, provideZoneChangeDetection} from '@angular/core';
  import {provideRouter} from '@angular/router';

  import {routes} from './app.routes';
  import {provideHttpClient} from '@angular/common/http';
  import {provideAnimationsAsync} from '@angular/platform-browser/animations/async';
  import {providePrimeNG} from 'primeng/config';
  import {wolfTheme} from '@assets/styles/theme';


  export const appConfig: ApplicationConfig = {
    providers: [
      provideZoneChangeDetection({eventCoalescing: true}),
      provideRouter(routes),
      provideAnimationsAsync(),
      provideHttpClient(),
      providePrimeNG({
          theme: {
            preset: wolfTheme,
            options: {
              cssLayer: {
                name: 'primeng',
                order: 'theme, base, primeng'
              }
            }
          }
        }
      )
    ],
  };
