import { Component, Inject } from '@angular/core';
import { IStudent } from 'src/app/core/models/interface/student.interface';
import { DialogRegisterComponent } from '../dialog-register/dialog-register.component';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { StudentService } from '../../../services/student.service';

@Component({
  selector: 'app-dialog-delete',
  templateUrl: './dialog-delete.component.html',
  styleUrls: ['./dialog-delete.component.scss'],
})
export class DialogDeleteComponent {
  student: IStudent | undefined;

  constructor(
    @Inject(MAT_DIALOG_DATA) public id: number,
    private dialogRef: MatDialogRef<DialogRegisterComponent>,
    public studentService: StudentService
  ) {
    this.student = studentService.findStudent(id);
  }

  deleteStudent(): void {
    if (this.student) {
      this.studentService.deleteStudentService(this.student?.id); //otro modo sería this.student = studentService.findStudent(id) as IStudent;
      this.dialogRef.close();
    }
  }
}
