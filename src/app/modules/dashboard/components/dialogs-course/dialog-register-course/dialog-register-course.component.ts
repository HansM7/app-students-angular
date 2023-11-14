import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { CourseService } from '../../../services/course.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-register-course',
  templateUrl: './dialog-register-course.component.html',
  styleUrls: ['./dialog-register-course.component.scss'],
})
export class DialogRegisterCourseComponent implements OnInit {
  courseGroup: FormGroup;
  toppings = new FormControl('');
  toppingList: string[] = ['PROGRAMMING', 'DATA', 'TECHNOLOGY'];
  constructor(
    private formBuilder: FormBuilder,
    private courseService: CourseService,
    private dialogRef: MatDialogRef<DialogRegisterCourseComponent>
  ) {
    this.courseGroup = this.formBuilder.group({
      title: ['', [Validators.required]],
      description: ['', [Validators.required]],
      url: ['', []],
      type: this.toppings,
    });
  }

  ngOnInit() {}

  onSubmit() {
    if (this.courseGroup.valid) {
      const data = this.courseGroup.getRawValue();
      console.log(this.toppings);
      this.courseService
        .creatCourseService({ ...data, enabled: true })
        .subscribe((response) => {
          this.dialogRef.close();
          // console.log(response
        });
    }
  }
}
