import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlStudentPipe } from './students/control-student.pipe';
import { ControlTeacherPipe } from './teachers/control-teacher.pipe';

@NgModule({
  declarations: [ControlStudentPipe, ControlTeacherPipe],
  imports: [CommonModule],
  exports: [ControlStudentPipe, ControlTeacherPipe],
})
export class PipesModule {}
