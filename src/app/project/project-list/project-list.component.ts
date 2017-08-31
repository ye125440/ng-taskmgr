///<reference path="../../../../node_modules/@angular/material/typings/dialog/dialog.d.ts"/>
import { Component, HostBinding, OnInit } from '@angular/core';
import { MdDialog } from '@angular/material';
import { NewProjectComponent } from '../new-project/new-project.component';
import { InviteComponent } from '../invite/invite.component';
import { ConfirmDialogComponent } from '../../shared/confirm-dialog/confirm-dialog.component';
import { sliceToRight } from '../../anims/router.anim';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss'],
  animations: [
    sliceToRight
  ]
})
export class ProjectListComponent implements OnInit {
  @HostBinding('@routerAnim') state;

  projects = [
    {
      'name': '企业协作平台',
      'desc': '这是一个企业内部项目',
      'coverImg': 'assets/img/covers/0.jpg'
    },
    {
      'name': '自动化测试项目',
      'desc': '这是一个企业内部项目',
      'coverImg': 'assets/img/covers/1.jpg'
    }
  ];

  constructor(private dialog: MdDialog) { }

  ngOnInit() {
  }

  openNewProjectDialog() {
    // console.log(this.dialog);
    const dialogRef = this.dialog.open(NewProjectComponent, {data: {title: '新建项目', dark: true}});
    dialogRef.afterClosed().subscribe(result => console.log(result));
  }

  launchInviteDialog() {
    const dialogRef = this.dialog.open(InviteComponent);
    dialogRef.afterClosed().subscribe(result => console.log(result));
  }

  launchEditDialog(project) {
    const dialogRef = this.dialog.open(NewProjectComponent, {data: {title: '编辑项目', project: project}});
  }

  launchConfirmDialog() {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {data: {title: '删除该项目？', content: '点击 确定 按钮删除该项目。'}});
    dialogRef.afterClosed().subscribe(result => console.log(result));
  }

}
