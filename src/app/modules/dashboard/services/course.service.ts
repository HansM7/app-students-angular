import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { api_url } from 'src/app/core/environments/api';
import {
  ICourse,
  ICourseForm,
} from 'src/app/core/models/interface/course.interface';
import { courses } from 'src/app/data/courses';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  url = api_url;
  courses: ICourse[] | undefined;

  constructor(private http: HttpClient) {}

  creatCourseService(data: ICourseForm): Observable<any> {
    return this.http.post<any>(api_url + '/courses', data);
    // const id = this.courses.length + 1;
    // data.enabled = true;
    // this.courses.push({ ...data, id: id });
  }

  findCourses(): Observable<ICourse[]> {
    return this.http
      .get<ICourse[]>(api_url + '/courses')
      .pipe(map((courses) => courses));
  }

  findCourse(id: number): Observable<ICourse> {
    return this.http
      .get<ICourse>(api_url + '/courses/' + id)
      .pipe(map((course) => course));
    // const course: ICourse | undefined = this.courses.find(
    //   (course) => course.id === id
    // );
    // if (course) {
    //   return course;
    // }
    // return undefined;
  }

  updateCourseService(id: number, data: ICourseForm): Observable<any> {
    return this.http.patch<any>(this.url + '/courses/' + id, data);
    // const course = this.courses.find((student) => student.id === id);

    // if (course) {
    //   course.title = data.title;
    //   course.description = data.description;
    //   course.enabled = data.enabled;
    //   course.type = data.type;
    // }
  }

  deleteCourseService(id: number): Observable<any> {
    return this.http.delete<any>(this.url + '/courses/' + id);
    // const index = this.courses.findIndex((s) => s.id === id);
    // if (index !== -1) this.courses.splice(index, 1);
  }
}
