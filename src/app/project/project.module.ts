import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectItemComponent } from './project-item/project-item.component';
import { NewProjectComponent } from './new-project/new-project.component';
import { InviteComponent } from './invite/invite.component';
import { ProjectRoutingModule } from './project-route.module';

@NgModule({
  imports: [
    SharedModule,
    ProjectRoutingModule,
    BrowserModule
  ],
  declarations: [
    ProjectItemComponent,
    ProjectListComponent,
    NewProjectComponent,
    InviteComponent
  ],
  entryComponents: [
    NewProjectComponent,
    InviteComponent
  ]
})
export class ProjectModule { }
