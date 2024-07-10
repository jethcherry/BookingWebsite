import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { routes } from './app.routes';
import { TokenInterceptor } from './Interceptors/token';
import { provideEffects } from '@ngrx/effects';
import { provideStore } from '@ngrx/store';
export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideHttpClient(withInterceptors([TokenInterceptor])),
   provideEffects(), provideStore({})]
};
