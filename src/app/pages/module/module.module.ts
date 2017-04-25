import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { routes } from './module.routes';
import { ModuleComponent } from './module.component';

import { MaterialModule } from '@angular/material';

console.log('`Module` bundle loaded asynchronously');

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
