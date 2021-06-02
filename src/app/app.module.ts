import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogModule } from './log/log.module';
import { LogService } from './log/services/LogService';
import { TestInteraceModule } from './TestInterface/TestInterface.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSnackBarComponent } from './log/components/MatSnackBar/MatSnackBar.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    TestInteraceModule,
    LogModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [LogService],
  bootstrap: [AppComponent],
})
export class AppModule {}
