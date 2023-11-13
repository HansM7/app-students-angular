import { Component, Inject, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { IStudent } from 'src/app/core/models/interface/student.interface';
import { StudentService } from '../../../services/student.service';
import { CourseService } from '../../../services/course.service';
import { ICourse } from 'src/app/core/models/interface/course.interface';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

@Component({
  selector: 'app-dialog-detail',
  templateUrl: './dialog-detail.component.html',
  styleUrls: ['./dialog-detail.component.scss'],
})
export class DialogDetailComponent {
  student!: IStudent;
  courseCtrl = new FormControl();
  filteredCourses: ICourse[] = [];

  @ViewChild('courseInput') courseInput: any;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<DialogDetailComponent>,
    public studentService: StudentService,
    public courseService: CourseService
  ) {
    this.studentService.findStudent(data.id).subscribe((data) => {
      this.student = data;
    });
    // this.student = this.studentService.findStudent(data.id) as IStudent;
  }

  remove(course: ICourse): void {
    // if (this.student.courses) {
    //   const index = this.student.courses.findIndex(
    //     (c) => c.course.id === course.id
    //   );
    //   if (index >= 0) {
    //     this.student.courses.splice(index, 1);
    //   }
    // }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    const course: ICourse = this.data.courses.find(
      (course: ICourse) => course.title === event.option.value
    );
    console.log(course);
    this.studentService
      .addCourseToStudent(course, this.data.id)
      .subscribe((data) => {
        this.student.courses = data.courses;
      });
  }

  public filterSugestions(event: Event): void {
    const input = (event.target as HTMLInputElement).value;
    this.filteredCourses = this.data.courses.filter((course: ICourse) =>
      course.title.toLowerCase().includes(input.toLowerCase())
    );
    console.log(this.filteredCourses);
  }
}
