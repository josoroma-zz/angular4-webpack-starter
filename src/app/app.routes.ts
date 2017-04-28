import { Routes } from '@angular/router';

import { HomeComponent } from './components/home';
import { ObservableComponent } from './components/observable';
import { NoContentComponent } from './components/no-content';

import { DataResolver } from './app.resolver';

export const ROUTES: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'module',
    loadChildren: './components/module#ModuleModule'
  },
  {
    path: 'observable',
    component: ObservableComponent
  },
  {
    path: '**',
    component: NoContentComponent
  }
];
