import { NgModule } from '@angular/core';
import { NgxTreeviewSelectComponent } from './ngx-treeview-select.component';
import {CommonModule} from "@angular/common";



@NgModule({
  declarations: [NgxTreeviewSelectComponent],
  imports: [
    CommonModule
  ],
  exports: [NgxTreeviewSelectComponent]
})
export class NgxTreeviewSelectModule { }
