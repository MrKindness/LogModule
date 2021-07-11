import { CollectionViewer, DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { NotificationsSelector } from '../store/selectors/notifications.selector';
import { MatSnackBarNotification, MatSnackBarType } from '../types/MatSnackBarType';
import { Store, select } from '@ngrx/store';

export class TableViewDataSource extends DataSource<MatSnackBarNotification> {
  constructor(private store: Store) {
    super();
  }

  private dataStream = this.store.pipe(
    select(NotificationsSelector),
    map((mass) => {
      console.log(mass);
      console.log(this.TransformInTableElement(mass));
      return [...this.TransformInTableElement(mass)];
    })
  );

  connect(
    collectionViewer: CollectionViewer
  ): Observable<
    MatSnackBarNotification[] | readonly MatSnackBarNotification[]
  > {
    return this.dataStream;
  }

  disconnect(collectionViewer: CollectionViewer): void {}

  TransformInTableElement(
    mass: MatSnackBarNotification[]
  ): MatSnackBarNotification[] {
    return mass.map(
      (elem): MatSnackBarNotification => ({
        NotificationType: MatSnackBarType[elem.NotificationType],
        data: elem.data,
        time: elem.time,
        id: elem.id,
      })
    );
  }
}
