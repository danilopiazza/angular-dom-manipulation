import { delay, of } from "rxjs";

export class AfterRenderChildService {
  getTableData() {
    return of([
      ['Foo', 'Bar', 'Baz'],
      [1, 2, 3]
    ]).pipe(
      delay(500)
    );
  }
}
