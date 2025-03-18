
import { ApplicationConfig, provideAppInitializer, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withComponentInputBinding, 
  // withDebugTracing 
} from '@angular/router';
import { Observable } from 'rxjs';
import { routes } from './app.routes';






function AppInitializerFunc(): void | Observable<unknown> | Promise<unknown> {
  console.log('inside app initializer function');
}





console.log('before app config declaration');
export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideAppInitializer(AppInitializerFunc),
    provideRouter(routes,
      // withDebugTracing(), 
      withComponentInputBinding())

  ]
};
console.log('after app config declaration');

