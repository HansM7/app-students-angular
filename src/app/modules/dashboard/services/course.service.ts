import { Injectable } from '@angular/core';
import {
  ICourse,
  ICourseForm,
} from 'src/app/core/models/interface/course.interface';
import { courses } from 'src/app/data/courses';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  courses: ICourse[] = courses;

  constructor() {}

  creatCourseService(data: ICourseForm): void {
    const id = this.courses.length + 1;
    data.enabled = true;
    this.courses.push({ ...data, id: id });
  }

  findCourse(id: number): ICourse | undefined {
    console.log(id);
    const course: ICourse | undefined = this.courses.find(
      (course) => course.id === id
    );
    console.log('course is....');
    console.log(course);
    if (course) {
      return course;
    }
    return undefined;
  }

  updateCourseService(id: number, data: ICourseForm): void {
    const course = this.courses.find((student) => student.id === id);

    if (course) {
      course.title = data.title;
      course.description = data.description;
      course.enabled = data.enabled;
      course.type = data.type;
    }
  }

  deleteCourseService(id: number): void {
    const index = this.courses.findIndex((s) => s.id === id);
    if (index !== -1) this.courses.splice(index, 1);
  }
}
