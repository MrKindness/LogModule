import { Component, OnDestroy, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { NotificationsService } from '../../services/NotificationsService';
import {
  CloseNotificationPage,
  OpenNotificationsPageAction,
} from '../../store/actions/notifications.actions';
import { NotificationsListSelector } from '../../store/reducers/notifications.reducer';

interface TableElement {
  TypeClass: string;
  data: string;
  time: number;
}

@Component({
  selector: 'app-notifications-page-component',
  templateUrl: './NotificationsPage.component.html',
  styleUrls: ['./NotificationsPage.component.scss'],
})
export class NotificationsPageComponent implements OnDestroy {
  @ViewChild(MatTable) table: any;
  DataArray: TableElement[] = [];
  displayedColumns: string[] = ['Icon', 'Data', 'Time'];
  Subscription: any;
  DisplayAmount = 5;

  constructor(
    private NotificationService: NotificationsService,
    private store: Store
    )
  {
    this.store.dispatch(OpenNotificationsPageAction());
    this.Subscription = this.store.pipe(
      select(NotificationsListSelector),
      map((event) => {
        console.log('From log page');
        console.log(event);
      })
    );

    // this.Subscription = this.NotificationService.NewNotication.subscribe({
    //   next: (Notification: SnackBarNotification) => {
    //     this.DataArray.unshift({
    //       TypeClass: SnackBarType[Notification.NotificationType],
    //       data: Notification.data,
    //       time: Notification.time,
    //     });
    //     this.table.renderRows();
    //   },
    // });
  }

  ngOnDestroy(): void {
    //console.log('destroy');
    this.store.dispatch(CloseNotificationPage());
  }
}
