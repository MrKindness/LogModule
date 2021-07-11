import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';

import { Store, select } from '@ngrx/store';

import { fromEvent } from 'rxjs';
import { auditTime, map } from 'rxjs/operators';

import {
  CloseNotificationPageAction,
  OpenNotificationsPageAction,
  ScrollAction,
} from '../../store/actions/notifications.actions';
import { NotificationsSelector } from '../../store/selectors/notifications.selector';

import { TableViewDataSource } from '../../services/TableViewDataSource.service';
import { MatSnackBarNotification } from '../../types/MatSnackBarType';

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
  LatestNotificationInstance: MatSnackBarNotification;
  NewsestNotificationInstance: MatSnackBarNotification;
  constructor(private store: Store) {}

  ngOnInit(): void {
    this.DataArray = new TableViewDataSource(this.store);

    this.NotificationsSub = this.store
      .pipe(
        select(NotificationsSelector),
        map((event: any) => {
          this.NewsestNotificationInstance = event[0];
          this.LatestNotificationInstance = event[event.length - 1];
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
      .subscribe();

    this.store.dispatch(OpenNotificationsPageAction());
  }

  ngOnDestroy(): void {
    this.NotificationsSub.unsubscribe();
    this.store.dispatch(CloseNotificationPageAction());
  }
}
