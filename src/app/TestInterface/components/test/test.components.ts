import { Component, EventEmitter, Output } from '@angular/core';
import {
  SnackBarNotification,
  SnackBarType,
} from 'src/app/log/types/SnackBarType';

@Component({
  selector: 'app-test-component',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
})
export class TestComponent {
  @Output() NotificationEmitter: EventEmitter<SnackBarNotification> =
    new EventEmitter<SnackBarNotification>();

  EventData: SnackBarNotification = {
    type: SnackBarType.Error,
    time: Date.now(),
    data: '',
  };

  NewOrderClick(): void {
    this.EventData.type = SnackBarType.NewOrder;
    this.EventData.data = 'Новый Заказ!';
    this.NotificationEmitter.emit(this.EventData);
  }

  OrderChangedClick(): void {
    this.EventData.type = SnackBarType.OrderChanged;
    this.EventData.data = 'Заказ изменен!';
    this.NotificationEmitter.emit(this.EventData);
  }

  WarningClick(): void {
    this.EventData.type = SnackBarType.Warning;
    this.EventData.data = 'Внимание!';
    this.NotificationEmitter.emit(this.EventData);
  }

  ErrorClick(): void {
    this.EventData.type = SnackBarType.Error;
    this.EventData.data = 'Произошла ошибка!';
    this.NotificationEmitter.emit(this.EventData);
  }

  InfoClick(): void {
    this.EventData.type = SnackBarType.Info;
    this.EventData.data = 'Информация!';
    this.NotificationEmitter.emit(this.EventData);
  }
}
