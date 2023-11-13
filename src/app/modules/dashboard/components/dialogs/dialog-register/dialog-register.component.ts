import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ICourse } from 'src/app/core/models/interface/course.interface';
import { StudentService } from '../../../services/student.service';
import { CourseService } from '../../../services/course.service';
import { validateEmail } from '../../../utils/custom.validator';
import {
  IDetailCourse,
  IStudentForm,
} from 'src/app/core/models/interface/student.interface';

@Component({
  selector: 'app-dialog-register',
  templateUrl: './dialog-register.component.html',
  styleUrls: ['./dialog-register.component.scss'],
})
export class DialogRegisterComponent {
  courseTemporal: IDetailCourse | undefined;
  studentGroup: FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA) public courses: ICourse[],
    private formBuilder: FormBuilder,
    public studentService: StudentService,
    public courseService: CourseService,
    private dialogRef: MatDialogRef<DialogRegisterComponent>
  ) {
    this.studentGroup = this.formBuilder.group({
      name: ['', [Validators.minLength(3), Validators.required]],
      lastname: ['', [Validators.minLength(3), Validators.required]],
      email: ['', [Validators.email, validateEmail]],
      course: [''],
    });
  }

  getErrorControl(field: string) {
    return this.studentGroup.controls[field];
  }

  onSubmit(): void {
    if (this.studentGroup.valid) {
      const formData = this.studentGroup.getRawValue();

      this.courseService
        .findCourse(Number(formData.course))
        .subscribe((data) => {
          this.courseTemporal = {
            course: data,
            finished: false,
          };
        });

      const newData: IStudentForm = {
        ...formData,
        enabled: true,
        courses: [this.courseTemporal],
      };

      this.studentService.createStudent(newData).subscribe((data) => {
        this.dialogRef.close();
      });
    }
  }
}
