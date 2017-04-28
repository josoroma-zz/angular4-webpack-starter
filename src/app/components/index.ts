import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home';
import { ObservableComponent } from './observable';
import { ObservableContainerComponent } from './observable/container/observable.container';
import { NoContentComponent } from './no-content';

export const COMPONENTS = [
  HomeComponent,
  ObservableComponent,
  ObservableContainerComponent,
  NoContentComponent
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    RouterModule
  ],
  declarations: COMPONENTS,
  exports: COMPONENTS
})
export class ComponentsModule { }
