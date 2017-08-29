import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MdButtonModule, MdCardModule, MdIconModule, MdToolbarModule, MdInputModule, MdListModule, MdSlideToggleModule,
  MdGridListModule, MdDialogModule, MdAutocompleteModule
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MdButtonModule,
    MdCardModule,
    MdIconModule,
    MdToolbarModule,
    MdInputModule,
    MdListModule,
    MdSlideToggleModule,
    MdGridListModule,
    MdDialogModule,
    MdAutocompleteModule,
  ],
  exports: [
    CommonModule, // 把公用模块导出
    MdButtonModule,
    MdCardModule,
    MdIconModule,
    MdToolbarModule,
    MdInputModule,
    MdListModule,
    MdSlideToggleModule,
    MdGridListModule,
    MdDialogModule,
    MdAutocompleteModule,
  ],
  declarations: []
})
export class SharedModule { }
