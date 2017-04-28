import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';
import { routes } from './module.routes';

import { MaterialModule } from '@angular/material';

import { ModuleComponent } from './module.component';

@NgModule({
  declarations: [
    ModuleComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    MaterialModule
  ],
})
export class ModuleModule {
  public static routes = routes;
}
