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
  teacher!: ITeacher;
  courseCtrl = new FormControl();
  filteredCourses: ICourse[] = [];
  courses!: ICourse[];

  @ViewChild('courseInput') courseInput: any;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<DialogDetailComponentTeacher>,
    public teacherService: TeacherService,
    public courseService: CourseService
  ) {
    this.teacherService.findById(data.id).subscribe((response) => {
      this.teacher = response;
    });
    this.courseService.findCourses().subscribe((response) => {
      this.courses = response;
    });
  }

  remove(course: ICourse): void {
    this.teacherService.removeCourse(course.id).subscribe((response) => {
      this.teacher = response;
    });
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    const course: ICourse | undefined = this.courses.find(
      (item: ICourse) => item.title === event.option.value
    );

    if (course) {
      this.teacherService
        .asignedCourse(this.teacher.id, course)
        .subscribe((response) => {
          this.teacher.course = response.course;
        });
    }
  }

  public filterSugestions(event: Event): void {
    const input = (event.target as HTMLInputElement).value;
    this.filteredCourses = this.data.courses.filter((course: ICourse) =>
      course.title.toLowerCase().includes(input.toLowerCase())
    );
  }
}
