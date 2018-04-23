import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatSidenavModule } from '@angular/material';
import { CoreModule } from './core/core.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginModule } from './login/login.module';
// import { RegisterComponent } from './login/register/register.component';
import { ProjectModule } from './project/project.module';
import { TaskModule } from './task/task.module';
import { MatDialogModule } from '@angular/material/dialog';
import { OverlayModule } from '@angular/cdk/overlay';


@NgModule({
  declarations: [
    AppComponent,
    // RegisterComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    AppRoutingModule,
    LoginModule,
    ProjectModule,
    MatDialogModule,
    OverlayModule,
    TaskModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
