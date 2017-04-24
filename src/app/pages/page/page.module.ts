import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { routes } from './page.routes';
import { PageComponent } from './page.component';

import { MaterialModule } from '@angular/material';

console.log('`Page` bundle loaded asynchronously');

@NgModule({
  declarations: [
    PageComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    MaterialModule
  ],
})
export class PageModule {
  public static routes = routes;
}
