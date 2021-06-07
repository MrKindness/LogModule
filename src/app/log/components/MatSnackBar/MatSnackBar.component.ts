import { Component } from '@angular/core';
import { LogService } from '../../services/LogService';
import { MatSnackBar, MatSnackBarRef } from '@angular/material/snack-bar';
import { SnackBarType } from '../../types/SnackBarType';
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
      next: (type: SnackBarType) => {
        const BarData = { message: '', buttonText: 'Подробнее' };

        switch (type) {
          case SnackBarType.NewOrder:
            BarData.message = 'Новый заказ!';
            break;
          case SnackBarType.OrderChanged:
            BarData.message = 'Заказ был изменен!';
            break;
          case SnackBarType.Error:
            BarData.message = 'Произошла ошибка!';
            break;
          case SnackBarType.Warning:
            BarData.message = 'Опасность!';
            break;
          case SnackBarType.Info:
            BarData.message = 'Дополнительная информация!';
            break;
        }

        this.SnackBar.openFromComponent(SnackBarComponent, {
          duration: 3000,
          horizontalPosition: 'end',
          verticalPosition: 'top',
          data: BarData,
          panelClass: SnackBarType[type],
        });
      },
    });
  }

  HistoryClick(): void {
    this.router.navigate(['NotificationHistory']);
  }

  HomeClick(): void {
    this.router.navigate(['/']);
  }
}
