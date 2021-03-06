import { ChangeDetectionStrategy, ChangeDetectorRef, Component, HostBinding, OnInit } from '@angular/core';
import { MdDialog } from '@angular/material';
import { NewTaskComponent } from '../new-task/new-task.component';
import { CopyTaskComponent } from '../copy-task/copy-task.component';
import { ConfirmDialogComponent } from '../../shared/confirm-dialog/confirm-dialog.component';
import { NewTaskListComponent } from '../new-task-list/new-task-list.component';
import { sliceToRight } from '../../anims/router.anim';

@Component({
  selector: 'app-task-home',
  templateUrl: './task-home.component.html',
  styleUrls: ['./task-home.component.scss'],
  animations: [
    sliceToRight
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TaskHomeComponent implements OnInit {
  @HostBinding('@routerAnim') state;

  lists = [
    {
      id: 1,
      name: '待办',
      order: 1,
      tasks: [
        {
          id: 1,
          desc: '任务一: 去星巴克买咖啡',
          completed: true,
          priority: 3,
          owner: {
            id: 1,
            name: '张三',
            avatar: 'avatars:svg-11'
          },
          dueDate: new Date(),
          reminder: new Date(),
        },
        {
          id: 2,
          desc: '任务二: 完成老板布置的 ppt 作业',
          completed: false,
          priority: 2,
          owner: {
            id: 1,
            name: '李四',
            avatar: 'avatars:svg-12'
          },
          dueDate: new Date(),
        },
      ]
    },
    {
      id: 2,
      name: '进行中',
      order: 2,
      tasks: [
        {
          id: 1,
          desc: '任务一: 去85买蛋糕',
          completed: false,
          priority: 1,
          owner: {
            id: 1,
            name: '王五',
            avatar: 'avatars:svg-13'
          },
          dueDate: new Date(),
        },
        {
          id: 2,
          desc: '任务二: 分享会',
          completed: false,
          priority: 2,
          owner: {
            id: 1,
            name: '李四',
            avatar: 'avatars:svg-12'
          },
          dueDate: new Date(),
        },
      ]
    }
  ];

  constructor(private dialog: MdDialog, cd: ChangeDetectorRef) { }

  ngOnInit() {
  }

  launchNewTaskDialog() {
    this.dialog.open(NewTaskComponent, {data: {title: '新建任务'}});
  }

  launchCopyTaskDialog() {
    const dialogRef = this.dialog.open(CopyTaskComponent, {data: {lists: this.lists}});
  }

  launchUpdateDialog(task) {
    const dialogRef = this.dialog.open(NewTaskComponent, {data: {title: '修改任务', task: task}});
  }

  launchConfirmDialog() {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {data: {title: '删除该任务列表？', content: '点击 确定 按钮删除该任务列表。'}});
    dialogRef.afterClosed().subscribe(result => console.log(result));
  }

  launchEditListDialog() {
    const dialogRef = this.dialog.open(NewTaskListComponent, {data: {title: '修改列表名称'}});
    dialogRef.afterClosed().subscribe(result => console.log(result));
  }

  launchNewListDialog() {
    const dialogRef = this.dialog.open(NewTaskListComponent, {data: {title: '新建列表'}});
    dialogRef.afterClosed().subscribe(result => console.log(result));
  }

  handleMove(srcData, list) {
    switch (srcData.tag) {
      case 'task-item':
        console.log('handling item');
        break;
      case 'task-list':
        console.log('handling list');
        // 通过互换 order 属性改变 flex 布局的排布顺序
        const srcList = srcData.data;
        const tempOrder = srcList.order;
        srcList.order = list.order;
        list.order = tempOrder;
        break;
      default:
        break;
    }
  }

  handleQuickTask(desc: string) {
    console.log(desc);
  }

}
