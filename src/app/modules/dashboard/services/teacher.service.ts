import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, switchMap } from 'rxjs';
import { api_url } from 'src/app/core/environments/api';
import { ICourse } from 'src/app/core/models/interface/course.interface';
import {
  ITeacher,
  ITeacherForm,
} from 'src/app/core/models/interface/tracher.interface';
import { teachers } from 'src/app/data/teachers';
import { CourseService } from './course.service';

@Injectable({
  providedIn: 'root',
})
export class TeacherService {
  teachers!: ITeacher[];
  url: string = api_url;

  constructor(private http: HttpClient, private courseService: CourseService) {
    // this.teachers = teachers;
  }

  findTeachers(): Observable<ITeacher[]> {
    return this.http.get<ITeacher[]>(this.url + '/teachers');
  }

  createTeacher(data: ITeacherForm): Observable<any> {
    return this.http.post<any>(api_url + '/teachers', data);

    // data trae fullname and enabled
    // const id = this.teachers.length + 1;
    // this.teachers.push({ ...data, id, course: [] });
  }

  findById(id: number): Observable<ITeacher> {
    return this.http
      .get<ITeacher>(api_url + '/teachers/' + id)
      .pipe(map((response) => response));
    // const teacher = this.teachers.find((teacher) => teacher.id === id);
    // if (teacher) {
    //   return teacher;
    // }
    // return undefined;
  }

  editTeacher(id: number, data: ITeacherForm): Observable<any> {
    return this.http.patch<any>(api_url + '/teachers/' + id, data);
    // const teacher = this.teachers.find((teacher) => teacher.id === id);
    // if (teacher) {
    //   teacher.fullname = data.fullname;
    //   teacher.enabled = data.enabled;
    // }
  }

  deleteTeacher(id: number): Observable<any> {
    return this.http.delete<any>(api_url + '/teachers/' + id);
    // const index = this.teachers.findIndex((s) => s.id === id);
    // if (index !== -1) this.teachers.splice(index, 1);
  }

  asignedCourse(id: number, course: ICourse): Observable<any> {
    return this.courseService.findCourse(course.id).pipe(
      switchMap((data) => {
        const newData: ICourse[] = [data];
        // Your code here
        return this.http.patch<any>(api_url + '/teachers/' + id, {
          course: newData,
        });
      })
    );
  }

  removeCourse(id: number): Observable<any> {
    return this.http.patch<any>(this.url + '/teachers/' + id, { course: [] });
  }
}
