import { Component, Inject } from '@angular/core';
import {
  MatSnackBarRef,
  MAT_SNACK_BAR_DATA,
} from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-snack-bar',
  templateUrl: 'SnackBar.component.html',
  styleUrls: ['./SnackBar.component.scss'],
})
export class SnackBarComponent {
  constructor(
    @Inject(MAT_SNACK_BAR_DATA) public data: any,
    public snackBarRef: MatSnackBarRef<SnackBarComponent>,
    private router: Router
  ) {}

  Action(): void {
    this.snackBarRef.dismiss();
    this.router.navigate(['NotificationHistory']);
  }
}
