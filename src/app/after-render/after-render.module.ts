import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DataTableModule } from '../data-table/data-table.module';
import { AfterRenderParentComponent } from './after-render-parent/after-render-parent.component';
import { AfterRenderChildComponent } from './after-render-child/after-render-child.component';
import { AfterRenderRoutingModule } from './after-render-routing.module';
import { AfterRenderChildService } from './after-render-child/after-render-child.service';

@NgModule({
  declarations: [
    AfterRenderChildComponent,
    AfterRenderParentComponent
  ],
  imports: [
    CommonModule,
    AfterRenderRoutingModule,
    DataTableModule
  ],
  providers: [
    AfterRenderChildService
  ],
  exports: [
    AfterRenderParentComponent
  ]
})
export class AfterRenderModule { }
