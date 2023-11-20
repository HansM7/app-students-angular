import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { StudentsComponent } from './pages/students/students.component';
import { TeachersComponent } from './pages/teachers/teachers.component';
import { UsersComponent } from './pages/users/users.component';
import { CoursesComponent } from './pages/courses/courses.component';
import { NgModule } from '@angular/core';
import { ProfileComponent } from './pages/profile/profile.component';
import { DetailsComponent } from './pages/details/details.component';

const routes: Routes = [
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
    path: 'students/:id',
    component: ProfileComponent,
  },
  {
    path: 'courses',
    component: CoursesComponent,
  },
  {
    path: 'details',
    component: DetailsComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
