import { Component, ViewChild, Inject } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ICourse } from 'src/app/core/models/interface/course.interface';
import { ITeacher } from 'src/app/core/models/interface/tracher.interface';
import { TeacherService } from '../../../services/teacher.service';
import { CourseService } from '../../../services/course.service';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

@Component({
  selector: 'app-dialog-detail',
  templateUrl: './dialog-detail.component.html',
  styleUrls: ['./dialog-detail.component.scss'],
})
export class DialogDetailComponentTeacher {
  teacher: ITeacher;
  courseCtrl = new FormControl();
  filteredCourses: ICourse[] = [];

  @ViewChild('courseInput') courseInput: any;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<DialogDetailComponentTeacher>,
    public teacherService: TeacherService,
    public courseService: CourseService
  ) {
    this.teacher = this.teacherService.findById(data.id) as ITeacher;
  }

  remove(course: ICourse): void {
    if (this.teacher.course) {
      const index = this.teacher.course.findIndex((c) => c.id === course.id);
      if (index >= 0) {
        this.teacher.course.splice(index, 1);
      }
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    const selectedCourse = this.courseService.courses.find(
      (course) => course.title == event.option.value
    );

    if (selectedCourse) {
      this.teacherService.asignedCourse(this.teacher.id, selectedCourse);
      // console.log(this.teacherService.students);
    }
  }

  public filterSugestions(event: Event): void {
    const input = (event.target as HTMLInputElement).value;
    this.filteredCourses = this.courseService.courses.filter((course) =>
      course.title.toLowerCase().includes(input.toLowerCase())
    );
    console.log(this.filteredCourses);
  }
}
