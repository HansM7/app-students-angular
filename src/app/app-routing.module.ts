import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { AuthComponent } from './modules/auth/auth.component';
import { HomeComponent } from './modules/dashboard/pages/home/home.component';
import { StudentsComponent } from './modules/dashboard/pages/students/students.component';
import { TeachersComponent } from './modules/dashboard/pages/teachers/teachers.component';
import { UsersComponent } from './modules/dashboard/pages/users/users.component';
import { CoursesComponent } from './modules/dashboard/pages/courses/courses.component';
import { authGuardGuard } from './core/guards/auth-guard.guard';
import { dashboardGuard } from './core/guards/dashboard-guard.guard';

const routes: Routes = [
  {
    path: 'dashboard',
    canActivate: [dashboardGuard],
    component: DashboardComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
      },
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: 'students',
        component: StudentsComponent,
      },
      {
        path: 'teachers',
        component: TeachersComponent,
      },
      {
        path: 'users',
        component: UsersComponent,
      },
      {
        path: 'courses',
        component: CoursesComponent,
      },
    ],
  },
  {
    path: 'auth',
    canActivate: [authGuardGuard],
    component: AuthComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
