import { Component } from '@angular/core';
import { LogService } from './log/services/LogService';
import { SnackBarType } from './log/types/SnackBarType';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private NotificatonService: LogService) {}

  title = 'LogModule';

  OrderNotification(type: SnackBarType): void {
    this.NotificatonService.ShowNotification(type);
  }
}
