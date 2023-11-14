import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlStudentPipe } from './students/control-student.pipe';
import { ControlTeacherPipe } from './teachers/control-teacher.pipe';
import { ControlUserPipe } from './users/ControlUser.pipe';
import { CourseControlPipe } from './courses/course-control.pipe';

@NgModule({
  declarations: [
    ControlStudentPipe,
    ControlTeacherPipe,
    ControlUserPipe,
    CourseControlPipe,
  ],
  imports: [CommonModule],
  exports: [
    ControlStudentPipe,
    ControlTeacherPipe,
    ControlUserPipe,
    CourseControlPipe,
  ],
})
export class PipesModule {}
