import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {NgxTreeviewSelectModule} from 'ngx-treeview-select';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxTreeviewSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
