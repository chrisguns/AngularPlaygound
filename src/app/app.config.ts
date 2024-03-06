import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app-routing.module'; // Import the missing module

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes)]
};
