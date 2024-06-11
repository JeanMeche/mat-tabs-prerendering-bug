import { ApplicationConfig, mergeApplicationConfig } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideServerRendering } from '@angular/platform-server';
import { appConfig } from './app.config';
import { TabGroupBasicExample } from './example/tab-group-basic-example';

const serverConfig: ApplicationConfig = {
  providers: [provideServerRendering()],
};

export const config = mergeApplicationConfig(appConfig, serverConfig);

const bootstrap = () => bootstrapApplication(TabGroupBasicExample, config);

export default bootstrap;
