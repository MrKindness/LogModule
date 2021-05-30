import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogModule } from './log/log.module';
import { TestComponent } from './TestInterface/components/test/test.components';
import { TestInteraceModule } from './TestInterface/TestInterface.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    TestInteraceModule,
    LogModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
