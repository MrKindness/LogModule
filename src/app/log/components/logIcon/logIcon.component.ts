import { Component } from '@angular/core';
import { LogService } from '../../services/LogService';

@Component({
  selector: 'app-log-icon',
  templateUrl: './logIcon.component.html',
  styleUrls: ['./logIcon.component.scss'],
})
export class LogIconComponent {
  constructor(private NotificationService: LogService) {
    this.NotificationService.NewNotication.subscribe({
      next: (v) => {
        console.log('hello from logIcon!');
      },
    });
  }

  AreNewNotifications = true;
}
