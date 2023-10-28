import { Injectable } from '@angular/core';
import {
  IDetailCourse,
  IStudent,
  IStudentForm,
} from 'src/app/core/models/interface/student.interface';
import { CourseService } from './course.service';
import { ICourse } from 'src/app/core/models/interface/course.interface';
import { students } from 'src/app/data/students';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  students: IStudent[] = students;

  constructor(public courseService: CourseService) {}

  createStudentService(data: IStudentForm): void {
    const id = this.students.length + 1;
    this.students.push({ ...data, id: id });
  }

  findStudent(id: number): IStudent | undefined {
    const student = this.students.find((student) => student.id === id);
    if (student) return student;
    return undefined;
  }

  updateStudentService(id: number, data: IStudentForm): void {
    const student = this.students.find((student) => student.id === id);

    if (student) {
      student.name = data.name;
      student.lastname = data.lastname;
      student.email = data.email;
      student.enabled = data.enabled;
    }
  }

  deleteStudentService(id: number): void {
    const index = this.students.findIndex((s) => s.id === id);
    if (index !== -1) this.students.splice(index, 1);
  }

  addCourseToStudent(course: ICourse, id: number): void {
    const student = this.students.find((student) => student.id === id);

    if (student) {
      const detailCourse: IDetailCourse = {
        course,
        finished: false,
      };

      if (!student.courses) {
        student.courses = [];
        return;
      }

      const response = student.courses.find(
        (item) => item.course.id === course.id
      );
      if (!response) {
        student.courses.push(detailCourse);
      }
    }
  }

  finishedCourseStudent(id_student: number, id_course: number): void {
    const student = this.students.find((student) => student.id === id_student);
    if (student && student.courses) {
      const course = student.courses.find(
        (course) => course.course.id === id_course
      );
      if (course) {
        course.finished = true;
      }
    }
  }

  deleteCourseStudent(id_student: number, id_course: number): void {
    const student = this.students.find((student) => student.id === id_student);
    if (student && student.courses) {
      const courseIndex = student.courses.findIndex(
        (course) => course.course.id === id_course
      );
      if (courseIndex !== -1) {
        student.courses.splice(courseIndex, 1);
      }
    }
  }
}
