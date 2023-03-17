import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SigmaNgButton, SigmaNgModule } from 'projects/sigma-ng/src/public-api';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SigmaNgModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
