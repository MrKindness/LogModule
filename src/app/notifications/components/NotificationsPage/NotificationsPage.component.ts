import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { Store } from '@ngrx/store';
import {
  CloseNotificationPageAction,
  OpenNotificationsPageAction,
} from '../../store/actions/notifications.actions';
import { Subscription } from 'rxjs';
import { TableViewDataSource } from '../../services/TableViewDataSource.service';

@Component({
  selector: 'app-notifications-page-component',
  templateUrl: './NotificationsPage.component.html',
  styleUrls: ['./NotificationsPage.component.scss'],
})
export class NotificationsPageComponent implements OnDestroy, OnInit {
  @ViewChild(MatTable, { static: true }) table: any;
  DataArray;
  displayedColumns: string[] = ['Icon', 'Data', 'Time'];
  Subs: Subscription[] = [];

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.DataArray = new TableViewDataSource(this.store);
    this.store.dispatch(OpenNotificationsPageAction());
  }

  ngOnDestroy(): void {
    this.store.dispatch(CloseNotificationPageAction());
  }
}
