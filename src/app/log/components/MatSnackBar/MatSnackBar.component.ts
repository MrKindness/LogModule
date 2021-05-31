import { Component } from '@angular/core';
import { LogService } from '../../services/LogService';

@Component({
  selector: 'app-mat-snack-bar',
  templateUrl: './MatSnackBar.component.html',
  styleUrls: ['./MatSnackBar.component.scss'],
})

export class MatSnackBarComponent {
  constructor(private EventService: LogService){}
}
