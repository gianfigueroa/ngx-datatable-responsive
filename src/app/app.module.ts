import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DatatableResponsiveModule } from 'datatable-responsive';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DatatableResponsiveModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
