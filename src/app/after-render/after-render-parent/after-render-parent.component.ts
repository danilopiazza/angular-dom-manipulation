import { AfterContentInit, AfterRenderPhase, AfterViewInit, Component, OnInit, afterRender } from '@angular/core';

@Component({
  selector: 'app-after-render-parent',
  templateUrl: './after-render-parent.component.html'
})
export class AfterRenderParentComponent implements OnInit, AfterContentInit, AfterViewInit {
  private tableRowNodes?: NodeListOf<Element>;

  constructor() {
    afterRender(() => {
      const rowNodes = this.getRowNodes();
      console.log('afterRender', rowNodes);
      if (rowNodes) {
        this.tableRowNodes = rowNodes;
      }
    }, { phase: AfterRenderPhase.EarlyRead });
    afterRender(() => {
      if (this.tableRowNodes) {
        this.tableRowNodes.forEach((node, i) => {
          node.classList.add(i % 2 == 0 ? 'even-row' : 'odd-row');
        });
      }
    }, { phase: AfterRenderPhase.Write });
  }

  ngOnInit() {
    console.log('ngOnInit', 'node list is empty', this.getRowNodes());
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit', 'node list is empty', this.getRowNodes());
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit', 'node list is empty', this.getRowNodes());
  }

  private getRowNodes() {
    return document.querySelectorAll('.data-table-row');
  }
}
