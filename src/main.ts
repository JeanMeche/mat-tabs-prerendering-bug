import { VERSION as CDK_VERSION } from '@angular/cdk';
import '@angular/localize/init';
import { VERSION as MAT_VERSION } from '@angular/material/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app.config';
import { TabGroupBasicExample } from './example/tab-group-basic-example';

/* eslint-disable no-console */
console.info('Angular CDK version', CDK_VERSION.full);
console.info('Angular Material version', MAT_VERSION.full);

bootstrapApplication(TabGroupBasicExample, appConfig).catch((err) => console.error(err));
