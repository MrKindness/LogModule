import { Component } from '@angular/core';
import { MatSnackBarService } from './log/services/MatSnackBar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private NotificatonService: MatSnackBarService) {}

  title = 'LogModule';

  NewNotification(): void {
    this.NotificatonService.ShowNotification();
  }
}
