import { provideHttpClient } from '@angular/common/http';
import { importProvidersFrom, provideExperimentalZonelessChangeDetection } from '@angular/core';
import { MatNativeDateModule } from '@angular/material/core';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

export const appConfig = {
  providers: [
    provideClientHydration(),
    provideExperimentalZonelessChangeDetection(),
    provideAnimationsAsync(),
    provideHttpClient(),
    importProvidersFrom(MatNativeDateModule),
  ],
};
