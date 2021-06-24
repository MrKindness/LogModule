import { Component } from '@angular/core';
import { NotificationsService } from './notifications/services/NotificationsService';
import { MatSnackBarNotification } from './notifications/types/MatSnackBarType';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private NotificatonService: NotificationsService) {}

  title = 'LogModule';

  OrderNotification(type: MatSnackBarNotification): void {
    this.NotificatonService.ShowNotification(type);
  }
}
