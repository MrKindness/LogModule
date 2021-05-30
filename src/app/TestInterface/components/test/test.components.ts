import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-test-component',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
})
export class TestComponent {
  @Output() NewNotification = new EventEmitter();

  ButtonClick(): void{
    this.NewNotification.emit();
  }
}
