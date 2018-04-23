import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { RegisterComponent } from './login/register/register.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'register', component: RegisterComponent },
  { path: 'project', redirectTo: '/project',  pathMatch: 'full' },
  { path: 'tasklist', redirectTo: '/tasklist',  pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
