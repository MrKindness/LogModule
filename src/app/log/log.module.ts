import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LogIconComponent } from './components/logIcon/logIcon.component';
import { MatSnackBarComponent } from './components/MatSnackBar/MatSnackBar.component';
import { LogService } from './services/LogService';

@NgModule({
  declarations: [LogIconComponent, MatSnackBarComponent],
  imports: [CommonModule],
  providers: [LogService],
  exports: [LogIconComponent],
})
export class LogModule {}
