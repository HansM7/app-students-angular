import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ITeacher } from 'src/app/core/models/interface/tracher.interface';
import { TeacherService } from '../../../services/teacher.service';

@Component({
  selector: 'app-dialog-delete',
  templateUrl: './dialog-delete.component.html',
  styleUrls: ['./dialog-delete.component.scss'],
})
export class DialogDeleteComponentTeacher {
  teacher: ITeacher | undefined;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<DialogDeleteComponentTeacher>,
    public teacherService: TeacherService
  ) {
    this.teacher = teacherService.findById(data.id);
    console.log(this.teacher);
  }

  deleteTeacher(): void {
    if (this.teacher) {
      this.teacherService.deleteTeacher(this.teacher?.id); //otro modo sería this.student = studentService.findStudent(id) as IStudent;
      this.dialogRef.close();
    }
  }
}
