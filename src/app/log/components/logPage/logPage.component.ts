import { Component, OnDestroy, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { State, Store } from '@ngrx/store';
import { LogService } from '../../services/LogService';
import {
  ChangeStartPosition,
  CloseNotificationPage,
  OpenNotificationsPageAction,
} from '../../store/actions/notifications.actions';
import { NotificationsState } from '../../store/reducers/notifications.reducer';
import { SnackBarNotification, SnackBarType } from '../../types/SnackBarType';

interface TableElement {
  TypeClass: string;
  data: string;
  time: number;
}

@Component({
  selector: 'app-log-page-component',
  templateUrl: './LogPage.component.html',
  styleUrls: ['./LogPage.component.scss'],
})
export class LogPageComponent implements OnDestroy {
  @ViewChild(MatTable) table;
  DataArray: TableElement[] = [];
  displayedColumns: string[] = ['Icon', 'Data', 'Time'];
  Subscription = null;
  DisplayAmount = 5;

  constructor(
    private NotificationService: LogService,
    private store: Store,
    private state: State<NotificationsState>
  ) {
    console.log(this.state.getValue().Notifications.NotificationsList);
    this.store.dispatch(OpenNotificationsPageAction());
    let i = 0;
    for (
      i = 0;
      i < this.DisplayAmount &&
      i < this.state.getValue().Notifications.NotificationsList.length;
      i++
    ) {
      this.DataArray.push({
        TypeClass:
          SnackBarType[
            this.state.getValue().Notifications.NotificationsList[i]
              .NotificationType
          ],
        data: this.state.getValue().Notifications.NotificationsList[i].data,
        time: this.state.getValue().Notifications.NotificationsList[i].time,
      });
    }
    this.store.dispatch(ChangeStartPosition({ StartPosition: i }));

    this.Subscription = this.NotificationService.NewNotication.subscribe({
      next: (Notification: SnackBarNotification) => {
        this.DataArray.unshift({
          TypeClass: SnackBarType[Notification.NotificationType],
          data: Notification.data,
          time: Notification.time,
        });
        this.table.renderRows();
      },
    });
  }
  ngOnDestroy(): void {
    this.Subscription.unsubscribe();
    this.store.dispatch(CloseNotificationPage());
  }
}
