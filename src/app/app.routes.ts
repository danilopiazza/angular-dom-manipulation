import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: 'after-render', loadChildren: () => import('./after-render/after-render.module').then(mod => mod.AfterRenderModule) }
];
