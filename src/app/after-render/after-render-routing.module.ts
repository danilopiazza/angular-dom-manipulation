import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AfterRenderParentComponent } from './after-render-parent/after-render-parent.component';

const routes: Routes = [
  { path: '', component: AfterRenderParentComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AfterRenderRoutingModule { }
