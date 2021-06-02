import { Component } from '@angular/core';
import { LogService } from '../../services/LogService';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

@Component({
  selector: 'app-mat-snack-bar',
  templateUrl: './MatSnackBar.component.html',
  styleUrls: ['./MatSnackBar.component.scss'],
})
export class MatSnackBarComponent {
  constructor(
    private EventService: LogService,
    private SnackBar: MatSnackBar
  ) {}

  duration = 5;

  openSnackBar() {
    this.SnackBar.open('Новое уведомление!', );
  }
}
