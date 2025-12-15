import {
  ApplicationConfig,
  // DEFAULT_CURRENCY_CODE,
  LOCALE_ID,
  provideAppInitializer,
  provideZoneChangeDetection,
} from '@angular/core';
import {
  provideRouter,
  withComponentInputBinding,
  // withDebugTracing,
} from '@angular/router';
import { Observable } from 'rxjs';
import { routes } from './app.routes';
import {
  provideHttpClient,
  withFetch,
  withInterceptors,
} from '@angular/common/http';
import { fakeBackInterceptor, noopInterceptor } from './mock/mock0';
import { LocaleService } from './services/locale.service';
// import { CurrencyService } from './services/currency.service';

function AppInitializerFunc(): void | Observable<unknown> | Promise<unknown> {
  console.log('inside app initializer function');
}

console.log('before app config declaration');
export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideAppInitializer(AppInitializerFunc),
    provideRouter(
      routes,
      // withDebugTracing(),
      withComponentInputBinding()
    ),
    provideHttpClient(
      withFetch(),
      withInterceptors([noopInterceptor, fakeBackInterceptor])
    ),
    {
      provide: LOCALE_ID,
      useFactory: (ls: LocaleService) => ls.locale,
      deps: [LocaleService],
    },
    // {
    //   provide: DEFAULT_CURRENCY_CODE,
    //   useFactory: (cs: CurrencyService) => cs.CurrentCurrencyCode(),
    //   deps: [CurrencyService],
    // },
  ],
};
console.log('after app config declaration');
