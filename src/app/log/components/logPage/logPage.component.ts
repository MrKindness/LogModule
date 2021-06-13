import { Component, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { NavigationEnd, Router } from '@angular/router';
import { LogService } from '../../services/LogService';
import {
  SnackBarInfo,
  SnackBarNotification,
  SnackBarsTypeData,
  SnackBarType,
} from '../../types/SnackBarType';

interface TableElement {
  TypeClass: string;
  Data: string;
  time: number;
}

@Component({
  selector: 'app-log-page-component',
  templateUrl: './LogPage.component.html',
  styleUrls: ['./LogPage.component.scss'],
})
export class LogPageComponent {
  @ViewChild(MatTable) table;
  Subscription = null;
  constructor(private NotificationService: LogService) {
    this.Subscription = this.NotificationService.NewNotication.subscribe({
      next: (Notification: SnackBarNotification) => {
        this.DataArray.unshift({
          TypeClass: SnackBarType[Notification.type] + 'Icon',
          Data: Notification.data,
          time: Notification.time,
        });
        this.table.renderRows();
        console.log(this.DataArray);
      },
    });
  }
  ngOnDestroy() {
    this.Subscription.unsubscribe();
  }

  DataArray: TableElement[] = [];
  displayedColumns: string[] = ['Icon', 'Data', 'Time'];
}
