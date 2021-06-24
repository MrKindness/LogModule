import { Component, Inject } from '@angular/core';
import {
  MatSnackBarRef,
  MAT_SNACK_BAR_DATA,
} from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-snack-bar',
  templateUrl: 'MatSnackBar.component.html',
  styleUrls: ['./MatSnackBar.component.scss'],
})
export class MatSnackBarComponent {
  constructor(
    @Inject(MAT_SNACK_BAR_DATA) public data: any,
    public snackBarRef: MatSnackBarRef<MatSnackBarComponent>,
    private router: Router
  ) {}

  Action(): void {
    this.snackBarRef.dismiss();
    this.router.navigate(['NotificationHistory']);
  }
}
