import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlStudentPipe } from './students/control-student.pipe';
import { ControlTeacherPipe } from './teachers/control-teacher.pipe';
import { ControlUserPipe } from './users/ControlUser.pipe';

@NgModule({
  declarations: [ControlStudentPipe, ControlTeacherPipe, ControlUserPipe],
  imports: [CommonModule],
  exports: [ControlStudentPipe, ControlTeacherPipe, ControlUserPipe],
})
export class PipesModule {}
