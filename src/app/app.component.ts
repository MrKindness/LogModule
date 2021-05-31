import { Component } from '@angular/core';
import { LogService } from './log/services/LogService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private NotificatonService: LogService) {}

  title = 'LogModule';

  NewNotification(): void {
    this.NotificatonService.ShowNotification();
  }
}
