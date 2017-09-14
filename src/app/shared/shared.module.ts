import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MdButtonModule, MdCardModule, MdIconModule, MdToolbarModule, MdInputModule, MdListModule, MdSlideToggleModule,
  MdGridListModule, MdDialogModule, MdAutocompleteModule, MdMenuModule, MdCheckboxModule, MdTooltipModule,
  MdRadioModule, MdDatepickerModule, MdNativeDateModule, MdSelectModule, MdSidenavModule
} from '@angular/material';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { DirectiveModule } from '../directive/directive.module';

@NgModule({
  imports: [
    CommonModule,
    MdSidenavModule,
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
    DirectiveModule,
  ],
  exports: [
    CommonModule, // 把公用模块导出
    MdSidenavModule,
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
    DirectiveModule,
  ],
  declarations: [ConfirmDialogComponent],
  entryComponents: [ConfirmDialogComponent]
})
export class SharedModule { }
