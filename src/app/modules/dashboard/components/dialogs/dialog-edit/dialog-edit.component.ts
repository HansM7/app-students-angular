import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ICourse } from 'src/app/core/models/interface/course.interface';
import {
  IStudent,
  IStudentForm,
} from 'src/app/core/models/interface/student.interface';
import { StudentService } from '../../../services/student.service';
import { validateEmailEdit } from '../../../utils/custom.validator';

@Component({
  selector: 'app-dialog-edit',
  templateUrl: './dialog-edit.component.html',
  styleUrls: ['./dialog-edit.component.scss'],
})
export class DialogEditComponent {
  studentGroup: FormGroup;

  student: IStudent | undefined;
  courses: ICourse[];

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<DialogEditComponent>,
    public studentService: StudentService
  ) {
    // this.student = studentService.findStudent(data.id);
    this.courses = data.courses;

    this.studentGroup = this.formBuilder.group({
      name: [
        this.student?.name,
        [Validators.minLength(3), Validators.required],
      ],
      lastname: [
        this.student?.lastname,
        [Validators.minLength(3), Validators.required],
      ],
      email: [
        this.student?.email,
        [Validators.email, validateEmailEdit(this.student as IStudent)],
      ],
      enabled: [this.student?.enabled],
    });

    this.studentService.findStudent(this.data.id).subscribe((student) => {
      console.log(student);
      this.student = student;
      this.studentGroup.patchValue({
        name: this.student?.name,
        lastname: this.student?.lastname,
        email: this.student?.email,
        enabled: this.student?.enabled,
      });
    });
  }

  getErrorControl(field: string) {
    return this.studentGroup.controls[field];
  }

  onSubmit(): void {
    const formData = this.studentGroup.getRawValue();
    console.log(formData);

    this.studentService
      .updateStudentService(this.data.id, formData)
      .subscribe((data) => {
        this.dialogRef.close();
      });
  }
}
