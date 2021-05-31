import { Component } from '@angular/core';
import { MatSnackBarService } from '../../services/MatSnackBar.service';

@Component({
  selector: 'app-log-icon',
  templateUrl: './logIcon.component.html',
  styleUrls: ['./logIcon.component.scss'],
})
export class LogIconComponent {
  constructor(private NotificationService: MatSnackBarService) {
    this.NotificationService.NewNotication.subscribe({
      next: (v) => {
        console.log('hello from logIcon');
      },
    });
  }

  AreNewNotifications = true;
}
