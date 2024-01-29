import { Component, OnInit } from '@angular/core';
import { AfterRenderChildService } from './after-render-child.service';

@Component({
  selector: 'app-after-render-child',
  templateUrl: './after-render-child.component.html'
})
export class AfterRenderChildComponent implements OnInit {
  tableColumns = ['First Column', 'Second Column', 'Third Column'];
  tableData: any[][] = [];

  constructor(private service: AfterRenderChildService) { }

  ngOnInit() {
    this.service.getTableData().subscribe(tableData => this.tableData = tableData);
  }
}
