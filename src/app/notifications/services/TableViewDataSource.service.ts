import { CollectionViewer, DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { NotificationsSelector } from '../store/selectors/notifications.selector';
import { MatSnackBarNotificationServer, MatSnackBarType, TableElement } from '../types/MatSnackBarType';
import { Store, select } from '@ngrx/store';

export class TableViewDataSource extends DataSource<TableElement> {
  constructor(private store: Store) {
    super();
  }

  private dataStream = this.store.pipe(
    select(NotificationsSelector),
    map((mass) => {
      return [...this.TransformInTableElement(mass)];
    })
  );

  connect(
    collectionViewer: CollectionViewer
  ): Observable<TableElement[] | readonly TableElement[]> {
    return this.dataStream;
  }

  disconnect(collectionViewer: CollectionViewer): void {
    console.log('disconenct tableviewdataSource');
  }

  TransformInTableElement(
    mass: MatSnackBarNotificationServer[]
  ): TableElement[] {
    return mass.map(
      (elem): TableElement => ({
        TypeClass: MatSnackBarType[elem.NotificationType],
        data: elem.data,
        time: elem.time,
      })
    );
  }
}
