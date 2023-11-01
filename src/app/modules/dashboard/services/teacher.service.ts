import { Injectable } from '@angular/core';
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

  editTeacher(): void {}
}
