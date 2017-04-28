import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import { routes } from './sub-module.routes';

import { MaterialModule } from '@angular/material';

import { SubModuleComponent } from './sub-module.component';

@NgModule({
  declarations: [
    SubModuleComponent,
  ],
  imports: [
    RouterModule.forChild(routes),
    MaterialModule
  ],
})
export class SubModuleModule {
  public static routes = routes;
}
