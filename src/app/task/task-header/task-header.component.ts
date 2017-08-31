import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-task-header',
  templateUrl: './task-header.component.html',
  styleUrls: ['./task-header.component.scss']
})
export class TaskHeaderComponent implements OnInit {
  @Input() header = '';
  @Output() newTask = new EventEmitter<void>();
  @Output() moveAll = new EventEmitter<void>();
  @Output() deleteTask = new EventEmitter<void>();
  @Output() editList = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

  onNewTaskClick() {
    this.newTask.emit(); // 只是简单的发射 笨组件 复用性强
  }

  onMoveAllClick() {
    this.moveAll.emit();
  }

  onDeleteClick() {
    this.deleteTask.emit();
  }

  onEditListClick() {
    this.editList.emit();
  }

}
