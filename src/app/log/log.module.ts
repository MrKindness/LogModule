import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSnackBarComponent } from './components/MatSnackBar/MatSnackBar.component';
import { NewOrderComponent } from './components/NewOrder/NewOrder.component';
import { OrderChangedComponent } from './components/OrderChanged/OrderChanged.component';
import { LogService } from './services/LogService';

@NgModule({
  declarations: [
    MatSnackBarComponent,
    NewOrderComponent,
    OrderChangedComponent,
  ],
  imports: [CommonModule, MatSnackBarModule],
  providers: [LogService],
  exports: [MatSnackBarComponent],
})
export class LogModule {}
