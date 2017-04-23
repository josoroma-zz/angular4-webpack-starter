import { Routes } from '@angular/router';

import { HomeComponent } from './pages/home';
import { ObservableComponent } from './pages/observable';
import { NoContentComponent } from './pages/no-content';

import { DataResolver } from './app.resolver';

export const ROUTES: Routes = [
  { path: '',      component: HomeComponent },
  { path: 'home',  component: HomeComponent },
  { path: 'observable', component: ObservableComponent },
  { path: 'page', loadChildren: './pages/page#PageModule'},
  { path: '**',    component: NoContentComponent },
];
