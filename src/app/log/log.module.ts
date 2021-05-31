import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LogIconComponent } from './components/logIcon/logIcon.component';
import { MatSnackBarComponent } from './components/MatSnackBar/MatSnackBar.component';
import { MatSnackBarService } from './services/MatSnackBar.service';

@NgModule({
  declarations: [LogIconComponent, MatSnackBarComponent],
  imports: [CommonModule],
  providers: [MatSnackBarService],
  exports: [LogIconComponent],
})
export class LogModule {}
