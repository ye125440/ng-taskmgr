import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MdButtonModule, MdCardModule, MdIconModule, MdToolbarModule, MdInputModule, MdListModule, MdSlideToggleModule,
  MdGridListModule, MdDialogModule, MdAutocompleteModule, MdMenuModule, MdCheckboxModule, MdTooltipModule,
  MdRadioModule, MdDatepickerModule, MdNativeDateModule, MdSelectModule
} from '@angular/material';
import { ComfirmDialogComponent } from './comfirm-dialog/comfirm-dialog.component';

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
    MdMenuModule,
    MdCheckboxModule,
    MdTooltipModule,
    MdRadioModule,
    MdDatepickerModule,
    MdNativeDateModule,
    MdSelectModule,
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
    MdMenuModule,
    MdCheckboxModule,
    MdTooltipModule,
    MdRadioModule,
    MdDatepickerModule,
    MdNativeDateModule,
    MdSelectModule,
  ],
  declarations: [ComfirmDialogComponent]
})
export class SharedModule { }
