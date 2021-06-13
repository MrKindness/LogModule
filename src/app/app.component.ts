import { Component } from '@angular/core';
import { LogService } from './log/services/LogService';
import { SnackBarNotification, SnackBarType } from './log/types/SnackBarType';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private NotificatonService: LogService) {}

  title = 'LogModule';

  OrderNotification(type: SnackBarNotification): void {
    this.NotificatonService.ShowNotification(type);
  }
}
