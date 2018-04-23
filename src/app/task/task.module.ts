import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { TaskHomeComponent } from './task-home/task-home.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskItemComponent } from './task-item/task-item.component';
import { TaskHeaderComponent } from './task-header/task-header.component';
import { TaskRoutingModule } from './task-route.module';
import { NewTaskComponent } from './new-task/new-task.component';
import { CopyTaskComponent } from './copy-task/copy-task.component';
import { NewTaskListComponent } from './new-task-list/new-task-list.component';

@NgModule({
  imports: [
    SharedModule,
    TaskRoutingModule,
    BrowserModule
  ],
  declarations: [
    TaskHomeComponent,
    TaskListComponent,
    TaskItemComponent,
    TaskHeaderComponent,
    NewTaskComponent,
    NewTaskListComponent,
    CopyTaskComponent
  ],
  entryComponents: [
    NewTaskComponent,
    NewTaskListComponent,
    CopyTaskComponent
  ]
})
export class TaskModule { }
