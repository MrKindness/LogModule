import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { Store, select } from '@ngrx/store';
import {
  CloseNotificationPageAction,
  OpenNotificationsPageAction,
  ScrollAction,
} from '../../store/actions/notifications.actions';
import { fromEvent, pipe, Subscription } from 'rxjs';
import { TableViewDataSource } from '../../services/TableViewDataSource.service';
import { auditTime, distinctUntilChanged, map } from 'rxjs/operators';
import {
  MatSnackBarNotification,
  MatSnackBarNotificationServer,
} from '../../types/MatSnackBarType';
import { NotificationsSelector } from '../../store/selectors/notifications.selector';

@Component({
  selector: 'app-notifications-page-component',
  templateUrl: './NotificationsPage.component.html',
  styleUrls: ['./NotificationsPage.component.scss'],
})
export class NotificationsPageComponent implements OnDestroy, OnInit {
  @ViewChild(MatTable, { static: true }) table: any;
  displayedColumns: string[] = ['Icon', 'Id', 'Data', 'Time'];
  DataArray: TableViewDataSource;
  NotificationsSub;
  LatestNotificationInstance: MatSnackBarNotificationServer;
  NewsestNotificationInstance: MatSnackBarNotificationServer;
  constructor(private store: Store) {}

  ngOnInit(): void {
    this.DataArray = new TableViewDataSource(this.store);

    this.NotificationsSub = this.store
      .pipe(
        select(NotificationsSelector),
        map((event: any) => {
          this.NewsestNotificationInstance = event[0];
          this.LatestNotificationInstance = event[event.length - 1];
          //console.log('latest:');
          //console.log(this.LatestNotificationInstance);
        })
      )
      .subscribe();

    fromEvent(this.table._elementRef.nativeElement, 'scroll')
      .pipe(
        auditTime(200),
        map((e: any) => {
          const buffer = 200;
          if (
            e.target.scrollTop + e.target.offsetHeight + buffer >=
            e.target.scrollHeight
          ) {
            this.store.dispatch(
              ScrollAction({
                LastNotificationId: this.LatestNotificationInstance.id,
                LastNotificationTime: this.LatestNotificationInstance.time,
              })
            );
          }
        })
      )

    this.store.dispatch(OpenNotificationsPageAction());
  }

  ngOnDestroy(): void {
    this.NotificationsSub.unsubscribe();
    this.store.dispatch(CloseNotificationPageAction());
  }
}
