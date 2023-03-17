import { NgModule } from '@angular/core';
import { SigmaNgComponent } from './sigma-ng.component';
import { SigmaNgButton } from '../public-api';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [
    SigmaNgComponent,
    SigmaNgButton
  ],
  imports: [
    BrowserModule
  ],
  exports: [
    SigmaNgComponent,
    SigmaNgButton
  ]
})
export class SigmaNgModule { }
