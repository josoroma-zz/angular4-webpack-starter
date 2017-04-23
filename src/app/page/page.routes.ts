import { PageComponent } from './page.component';

export const routes = [
  { path: '', children: [
    { path: '', component: PageComponent },
    { path: 'show', loadChildren: './show#ShowModule' }
  ]},
];
