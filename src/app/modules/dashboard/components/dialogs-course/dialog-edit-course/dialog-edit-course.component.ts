import { Component, OnInit, Inject } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ETypeCourse } from 'src/app/core/models/enum/course.enum';
import { ICourse } from 'src/app/core/models/interface/course.interface';
import { CourseService } from '../../../services/course.service';

@Component({
  selector: 'app-dialog-edit-course',
  templateUrl: './dialog-edit-course.component.html',
  styleUrls: ['./dialog-edit-course.component.scss'],
})
export class DialogEditCourseComponent implements OnInit {
  courseGroup: FormGroup;

  toppings = new FormControl('');
  toppingList: ETypeCourse[] = [
    ETypeCourse.PROGRAMMING,
    ETypeCourse.DATA,
    ETypeCourse.TECHNOLOGY,
  ];
  constructor(
    @Inject(MAT_DIALOG_DATA) public course: ICourse,
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<DialogEditCourseComponent>,
    private courseService: CourseService
  ) {
    this.courseGroup = this.formBuilder.group({
      title: [course.title, [Validators.required]],
      description: [course.description, [Validators.required]],
      url: [course.url, []],
      enabled: [course.enabled],
      type: [course.type],
    });

    this.courseGroup.patchValue({
      enabled: course.enabled ? '0' : '1',
    });
  }

  ngOnInit() {}

  onSubmit() {
    if (this.courseGroup.valid) {
      const data = this.courseGroup.getRawValue();
      this.courseService
        .updateCourseService(this.course.id, {
          ...data,
          enabled: data.enabled == 0 ? true : false,
        })
        .subscribe((response) => {
          this.dialogRef.close();
        });
    }
  }
}
