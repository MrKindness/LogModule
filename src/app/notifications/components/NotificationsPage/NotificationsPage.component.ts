import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Store, select } from '@ngrx/store';
import {
  CloseNotificationPageAction,
  OpenNotificationsPageAction,
} from '../../store/actions/notifications.actions';
import { filter, map, subscribeOn } from 'rxjs/operators';
import {
  MatSnackBarNotification,
  MatSnackBarNotificationServer,
  MatSnackBarType,
} from '../../types/MatSnackBarType';
import {
  LastDownloadedNotificationsSelector,
  NewNotificationSelector,
  NotificationsSelector,
} from '../../store/selectors/notifications.selector';
import { Observable, Subscription } from 'rxjs';
import { CollectionViewer, DataSource } from '@angular/cdk/collections';

export interface TableElement {
  TypeClass: string;
  data: string;
  time: number;
}

@Component({
  selector: 'app-notifications-page-component',
  templateUrl: './NotificationsPage.component.html',
  styleUrls: ['./NotificationsPage.component.scss'],
})
export class NotificationsPageComponent implements OnDestroy, OnInit {
  @ViewChild(MatTable, { static: true }) table: any;
  DataArray: TableElement[] = [];
  displayedColumns: string[] = ['Icon', 'Data', 'Time'];
  Subs: Subscription[] = [];

  constructor(private store: Store) {}
  ngOnInit(): void {
    this.Subs.push(
      this.store
        .pipe(
          select(NewNotificationSelector),
          filter((event) => event !== undefined),
          map((notification) => {
            this.DataArray = [
              ...this.TransformInTableElement([notification]),
              ...this.DataArray,
            ];
          })
        )
        .subscribe()
    );

    this.Subs.push(
      this.store
        .pipe(
          select(LastDownloadedNotificationsSelector),
          filter((event) => event !== undefined),
          map((mass) => {
            console.log('mass event');
            console.log(mass);
            this.DataArray = [
              ...this.DataArray,
              ...this.TransformInTableElement(mass),
            ];
          })
        )
        .subscribe()
    );

    this.store.dispatch(OpenNotificationsPageAction());
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

  ngOnDestroy(): void {
    for (let sub of this.Subs) {
      sub.unsubscribe();
    }
    this.store.dispatch(CloseNotificationPageAction());
  }
}
