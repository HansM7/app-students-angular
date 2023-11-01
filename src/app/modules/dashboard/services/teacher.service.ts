import { Injectable } from '@angular/core';
import { ICourse } from 'src/app/core/models/interface/course.interface';
import {
  ITeacher,
  ITeacherForm,
} from 'src/app/core/models/interface/tracher.interface';
import { teachers } from 'src/app/data/teachers';

@Injectable({
  providedIn: 'root',
})
export class TeacherService {
  teachers: ITeacher[];

  constructor() {
    this.teachers = teachers;
  }

  createTeacher(data: ITeacherForm): void {
    // data trae fullname and enabled
    const id = this.teachers.length + 1;
    this.teachers.push({ ...data, id, course: [] });
  }

  findById(id: Number): ITeacher | undefined {
    const teacher = this.teachers.find((teacher) => teacher.id === id);
    if (teacher) {
      return teacher;
    }
    return undefined;
  }

  editTeacher(id: Number, data: ITeacherForm): void {
    const teacher = this.teachers.find((teacher) => teacher.id === id);
    if (teacher) {
      teacher.fullname = data.fullname;
      teacher.enabled = data.enabled;
    }
  }

  deleteTeacher(id: Number): void {
    const index = this.teachers.findIndex((s) => s.id === id);
    if (index !== -1) this.teachers.splice(index, 1);
  }

  asignedCourse(id: Number, course: ICourse): void {
    const teacher = this.teachers.find((teacher) => teacher.id === id);

    if (teacher) {
      teacher.course.push(course);
    }
  }
}
