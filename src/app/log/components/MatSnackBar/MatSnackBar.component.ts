import { Component } from '@angular/core';
import { LogService } from '../../services/LogService';
import { MatSnackBar, MatSnackBarRef } from '@angular/material/snack-bar';
import { SnackBarNotification, SnackBarType } from '../../types/SnackBarType';
import { SnackBarComponent } from '../SnackBar/SnackBar.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mat-snack-bar',
  templateUrl: './MatSnackBar.component.html',
  styleUrls: ['./MatSnackBar.component.scss'],
})
export class MatSnackBarComponent {
  AreNewNotifications = true;
  constructor(
    private EventService: LogService,
    private SnackBar: MatSnackBar,
    private router: Router
  ) {
    this.EventService.NewNotication.subscribe({
      next: (notification: SnackBarNotification) => {
        this.SnackBar.openFromComponent(SnackBarComponent, {
          duration: 3000,
          horizontalPosition: 'end',
          verticalPosition: 'top',
          data: { message: notification.data, buttonText: 'Подробнее' },
          panelClass: SnackBarType[notification.type],
        });
      },
      error: () => {},
    });
  }

  HistoryClick(): void {
    this.router.navigate(['NotificationHistory']);
  }

  HomeClick(): void {
    this.router.navigate(['/']);
  }
}
