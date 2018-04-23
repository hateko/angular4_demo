import { Component, OnInit } from '@angular/core';
import { NewTaskComponent } from '../new-task/new-task.component';
import { MatDialog } from '@angular/material/dialog';
import { CopyTaskComponent } from '../copy-task/copy-task.component';
import { ConfirmDialogComponent } from '../../shared/confirm-dialog/confirm-dialog.component'
import { NewTaskListComponent } from '../new-task-list/new-task-list.component';

@Component({
  selector: 'app-task-home',
  templateUrl: './task-home.component.html',
  styleUrls: ['./task-home.component.css']
})
export class TaskHomeComponent implements OnInit {

  lists = [
    {
      id: 1,
      name: '待办',
      task: [
        {
          id: 1,
          desc: '任务一：买咖啡',
          completed: true,
          owner: {
            id: 1,
            name: '张三',
            avater: 'avaters:svg-11'
          },
          dueDate: new Date(),
          reminder: true
        },
        {
          id: 2,
          desc: '任务二：去聚餐',
          completed: false,
          owner: {
            id: 2,
            name: '李四',
            avater: 'avaters:svg-12'
          },
          dueDate: new Date()
        },
        {
          id: 3,
          desc: '任务三：睡觉',
          completed: false,
          owner: {
            id: 3,
            name: '汪汪',
            avater: 'avaters:svg-13'
          },
          dueDate: new Date()
        }
      ]
    },
    {
      id: 2,
      name: '在办',
      task: [
        {
          id: 1,
          desc: '任务一：买咖啡',
          completed: false,
          owner: {
            id: 1,
            name: '张三',
            avater: 'avaters:svg-11'
          },
          dueDate: new Date()
        },
        {
          id: 2,
          desc: '任务二：去聚餐',
          completed: false,
          owner: {
            id: 2,
            name: '李四',
            avater: 'avaters:svg-12'
          },
          dueDate: new Date()
        },
        {
          id: 3,
          desc: '任务三：睡觉',
          completed: false,
          owner: {
            id: 3,
            name: '汪汪',
            avater: 'avaters:svg-13'
          },
          dueDate: new Date()
        }
      ]
    }
  ];

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }

  launchNewTaskDialog() {
    this.dialog.open(NewTaskComponent, {data: {title: '新建任务：'}});
  }

  launchCopyTaskDialog() {
    const dialogRef = this.dialog.open(CopyTaskComponent, {data: {lists: this.lists}});
  }

  launchUpdateTaskDialog(item) {
    const dialogRef = this.dialog.open(NewTaskComponent, {data: {title: '修改任务', task: item}});
  }

  launchConfirmDialog(item) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {data: {title: '删除列表', content: '确认删除该项目吗？'}});
    dialogRef.afterClosed().subscribe(result => console.log(result));
  }

  launchEditListDialog() {
    const dialogRef = this.dialog.open(NewTaskListComponent, {data: {title: '更改列表名称', content: '确认删除该项目吗？'}});
    dialogRef.afterClosed().subscribe(result => console.log(result));
  }

  launchNewListDialog() {
    const dialogRef = this.dialog.open(NewTaskListComponent, {data: {title: '新建列表名称', content: '确认删除该项目吗？'}});
    dialogRef.afterClosed().subscribe(result => console.log(result));
  }

}
