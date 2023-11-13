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
    this.studentService.findStudent(this.id).subscribe((data: IStudent) => {
      this.student = data;
    });
    // this.student = studentService.findStudent(id);
  }

  deleteStudent(): void {
    this.studentService.deleteStudent(this.id).subscribe((data) => {
      this.dialogRef.close();
    });
  }
}
