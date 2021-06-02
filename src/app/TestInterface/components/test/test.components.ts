import { Component, EventEmitter, Output } from '@angular/core';
import { SnackBarType } from 'src/app/log/types/SnackBarType';

@Component({
  selector: 'app-test-component',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
})
export class TestComponent {
  @Output() NotificationEmitter = new EventEmitter();

  NewOrderClick(): void {
    this.NotificationEmitter.emit(SnackBarType.NewOrder);
  }

  OrderChangedClick(): void {
    this.NotificationEmitter.emit(SnackBarType.OrderChanged);
  }
}
