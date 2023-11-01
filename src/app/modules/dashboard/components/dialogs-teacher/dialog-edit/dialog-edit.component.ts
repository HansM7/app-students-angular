import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ITeacher } from 'src/app/core/models/interface/tracher.interface';
import { TeacherService } from '../../../services/teacher.service';

@Component({
  selector: 'app-dialog-edit',
  templateUrl: './dialog-edit.component.html',
  styleUrls: ['./dialog-edit.component.scss'],
})
export class DialogEditComponentTeacher {
  teacherGroup: FormGroup;

  teacher: ITeacher | undefined;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<DialogEditComponentTeacher>,
    public teacherService: TeacherService
  ) {
    this.teacher = teacherService.findById(data.id);

    this.teacherGroup = this.formBuilder.group({
      fullname: [
        this.teacher?.fullname,
        [Validators.minLength(3), Validators.required],
      ],

      enabled: [this.teacher?.enabled],
    });
  }

  getErrorControl(field: string) {
    return this.teacherGroup.controls[field];
  }

  onSubmit(): void {
    if (this.teacherGroup.valid) {
      const fullname = this.teacherGroup.value['fullname'];
      const enabled = this.teacherGroup.value['enabled'];
      this.teacherService.editTeacher(this.teacher?.id as Number, {
        fullname,
        enabled,
      });
      this.dialogRef.close();
    }
  }
}
