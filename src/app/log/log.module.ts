import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSnackBarComponent } from './components/MatSnackBar/MatSnackBar.component';
import { SnackBarComponent } from './components/SnackBar/SnackBar.component';
import { LogService } from './services/LogService';

@NgModule({
  declarations: [MatSnackBarComponent, SnackBarComponent],
  imports: [CommonModule, MatSnackBarModule],
  providers: [LogService],
  exports: [MatSnackBarComponent],
})
export class LogModule {}
