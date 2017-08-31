import { Component, Inject, OnInit } from '@angular/core';
import { MD_DIALOG_DATA, MdDialogRef } from '@angular/material';

@Component({
  selector: 'app-comfirm-dialog',
  template: `
    <h3 md-dialog-title>{{title}}</h3>
    <div md-dialog-content>
      {{content}}
    </div>
    <div md-dialog-actions>
      <span class="fill-remaining-space"></span>
      <button type="button" md-raised-button color="primary" (click)="onClick(true)">确定</button>
      <button type="button" md-button md-dialog-close (click)="onClick(false)">取消</button>
      <span class="fill-remaining-space"></span>
    </div>
  `,
  styles: []
})
export class ConfirmDialogComponent implements OnInit {
  title = '';
  content = '';

  constructor(
    @Inject(MD_DIALOG_DATA) private data,
    private dialogRed: MdDialogRef<ConfirmDialogComponent>
  ) { }

  ngOnInit() {
    this.title = this.data.title;
    this.content = this.data.content;
  }

  onClick(result: boolean) {
    this.dialogRed.close(result); // 对话框关闭的时候传递一个参数 该参数可以是任何类型
  }

}
