import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlStudentPipe } from './students/control-student.pipe';

@NgModule({
  declarations: [ControlStudentPipe],
  imports: [CommonModule],
  exports: [ControlStudentPipe],
})
export class PipesModule {}
