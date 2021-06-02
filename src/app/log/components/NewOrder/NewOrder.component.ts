import { Component, Inject } from '@angular/core';
import {
  MatSnackBarRef,
  MAT_SNACK_BAR_DATA,
} from '@angular/material/snack-bar';

@Component({
  selector: 'app-mat-snack-new-order',
  templateUrl: 'NewOrder.component.html',
  styleUrls: ['NewOrder.component.scss'],
})
export class NewOrderComponent {
  constructor(
    @Inject(MAT_SNACK_BAR_DATA) public data: any,
    public snackBarRef: MatSnackBarRef<NewOrderComponent>
  ) {
    console.log('ItWorks!');
  }
}
