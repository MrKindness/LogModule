import { Component, EventEmitter, Output } from '@angular/core';
import {
  MatSnackBarNotification,
  MatSnackBarType,
} from 'src/app/notifications/types/MatSnackBarType';

@Component({
  selector: 'app-test-component',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
})
export class TestComponent {
  @Output() NotificationEmitter: EventEmitter<MatSnackBarNotification> =
    new EventEmitter<MatSnackBarNotification>();

  EventData: MatSnackBarNotification = {
    NotificationType: MatSnackBarType.Error,
    time: Date.now(),
    data: '',
  };

  NewOrderClick(): void {
    this.EventData.NotificationType = MatSnackBarType.NewOrder;
    this.EventData.data = 'Новый Заказ!';
    this.NotificationEmitter.emit(this.EventData);
  }

  OrderChangedClick(): void {
    this.EventData.NotificationType = MatSnackBarType.OrderChanged;
    this.EventData.data = 'Заказ изменен!';
    this.NotificationEmitter.emit(this.EventData);
  }

  WarningClick(): void {
    this.EventData.NotificationType = MatSnackBarType.Warning;
    this.EventData.data = 'Внимание!';
    this.NotificationEmitter.emit(this.EventData);
  }

  ErrorClick(): void {
    this.EventData.NotificationType = MatSnackBarType.Error;
    this.EventData.data = 'Произошла ошибка!';
    this.NotificationEmitter.emit(this.EventData);
  }

  InfoClick(): void {
    this.EventData.NotificationType = MatSnackBarType.Info;
    this.EventData.data = 'Информация!';
    this.NotificationEmitter.emit(this.EventData);
  }
}