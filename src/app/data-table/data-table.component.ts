import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html'
})
export class DataTableComponent {
  @Input("columns") columns: string[] = [];
  @Input("data") data: any[][] = [];
}
