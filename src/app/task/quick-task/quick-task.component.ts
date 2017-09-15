import { Component, EventEmitter, HostListener, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-quick-task',
  templateUrl: './quick-task.component.html',
  styleUrls: ['./quick-task.component.scss']
})
export class QuickTaskComponent implements OnInit {
  desc: string;
  @Output() quickTask = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  @HostListener('keyup.enter')
  sendQuickTask() {
    if (!this.desc || this.desc.length === 0 || !this.desc.trim()) {
      return;
    }
    this.quickTask.emit(this.desc);
    this.desc = '';
  }

  onSubmit({value, valid}, ev: Event) {
    ev.preventDefault(); // 避免点击 submit 类型的按钮是自动刷新
    console.log(JSON.stringify(value));
    console.log(JSON.stringify(valid));
  }

}
