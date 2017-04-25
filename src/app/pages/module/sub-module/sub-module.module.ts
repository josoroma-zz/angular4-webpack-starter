import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { routes } from './sub-module.routes';
import { SubModuleComponent } from './sub-module.component';

import { MaterialModule } from '@angular/material';

console.log('`SubModule` bundle loaded asynchronously');

@NgModule({
  declarations: [
    // Components / Directives/ Pipes
    SubModuleComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    MaterialModule
  ],
})
export class SubModuleModule {
  public static routes = routes;
}
