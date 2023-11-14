import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TeacherService } from '../../../services/teacher.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-register',
  templateUrl: './dialog-register.component.html',
  styleUrls: ['./dialog-register.component.scss'],
})
export class DialogRegisterComponentTeacher {
  teacherGroup: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    public teacherService: TeacherService,
    private dialogRef: MatDialogRef<DialogRegisterComponentTeacher>
  ) {
    this.teacherGroup = this.formBuilder.group({
      fullname: ['', [Validators.minLength(3), Validators.required]],
    });
  }

  onSubmit(): void {
    if (this.teacherGroup.valid) {
      const fullname = this.teacherGroup.value['fullname'];

      if (fullname) {
        this.teacherService
          .createTeacher({ fullname, enabled: true })
          .subscribe((response) => {
            this.dialogRef.close();
          });
      }
    }
  }
}
