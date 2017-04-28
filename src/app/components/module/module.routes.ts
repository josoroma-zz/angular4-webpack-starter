import { ModuleComponent } from './module.component';

export const routes = [
  {
    path: '', children: [
      {
        path: '',
        component: ModuleComponent
      },
      {
        path: 'sub-module',
        loadChildren: './sub-module#SubModuleModule'
      }
    ]
  }
];
