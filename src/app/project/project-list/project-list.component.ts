import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NewProjectComponent } from '../new-project/new-project.component';
import { InviteComponent } from '../invite/invite.component';
import { ConfirmDialogComponent } from '../../shared/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {
  projects = [
    {
      'name': '哈哈哈0',
      'desc': '啊啊啊啊啊0',
      'coverImg': 'assets/covers/0.jpg'
    },
    {
      'name': '哈哈哈1',
      'desc': '啊啊啊啊啊1',
      'coverImg': 'assets/covers/1.jpg'
    },
    {
      'name': '哈哈哈2',
      'desc': '啊啊啊啊啊2',
      'coverImg': 'assets/covers/2.jpg'
    }
  ];
  constructor(public dialog: MatDialog) {}
  // constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }

  // openNewProjectDialog () {
  //   this.dialog.open(NewProjectComponent);
  // }

  openNewProjectDialog(): void {
    const dialogRef = this.dialog.open(NewProjectComponent, {data: { title: '新增项目：'}});
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
  }

  launchInviteDialog() {
    const dialogRef = this.dialog.open(InviteComponent);
  }

  launchUpdateDialog() {
    const dialogRef = this.dialog.open(NewProjectComponent, {data: { title: '编辑项目：'}});
  }

  launchConfirmDialog() {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {data: {title: '删除项目：', content: '确认删除该项目吗？'}});
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
  }
}
