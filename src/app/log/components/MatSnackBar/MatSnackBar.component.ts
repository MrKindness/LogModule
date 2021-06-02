import { Component } from '@angular/core';
import { LogService } from '../../services/LogService';
import { MatSnackBar, MatSnackBarRef } from '@angular/material/snack-bar';
import { SnackBarType } from '../../types/SnackBarType';
import { NewOrderComponent } from '../NewOrder/NewOrder.component';

@Component({
  selector: 'app-mat-snack-bar',
  templateUrl: './MatSnackBar.component.html',
  styleUrls: ['./MatSnackBar.component.scss'],
})
export class MatSnackBarComponent {
  AreNewNotifications = true;
  constructor(private EventService: LogService, private SnackBar: MatSnackBar) {
    let Bar: MatSnackBarRef<any> = null;
    this.EventService.NewNotication.subscribe({
      next: (type: SnackBarType) => {
        switch (type) {
          case SnackBarType.NewOrder:
            {
              Bar = this.SnackBar.openFromComponent(NewOrderComponent, {
                duration: 3000,
                horizontalPosition: 'end',
                verticalPosition: 'top',
                data: {
                  message: 'Новый заказ!',
                  buttonText: 'Подробнее',
                },
              });
            }
            break;
          case SnackBarType.OrderChanged:
            {
              Bar = this.SnackBar.openFromComponent(NewOrderComponent, {
                duration: 3000,
                horizontalPosition: 'end',
                verticalPosition: 'top',
                data: {
                  message: 'Заказ был изменен!',
                  buttonText: 'Подробнее',
                },
              });
            }
            break;
        }
        if (Bar !== null) {
          Bar.onAction().subscribe({
            next: (ev) => {
              console.log('hello from snack bar!');
              console.log(ev);
            },
          });
        }
      },
    });
  }
}
