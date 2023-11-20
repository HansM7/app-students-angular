import { Injectable } from '@angular/core';
import {
  IDetailCourse,
  IStudent,
  IStudentForm,
} from 'src/app/core/models/interface/student.interface';
import { CourseService } from './course.service';
import { ICourse } from 'src/app/core/models/interface/course.interface';
import { students } from 'src/app/data/students';
import { HttpClient } from '@angular/common/http';
import { api_url } from 'src/app/core/environments/api';
import { map, Observable, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  url: string = api_url;

  studentTemporal!: IStudent;

  constructor(public courseService: CourseService, private http: HttpClient) {
    this.http
      .get(api_url + '/courses')
      .pipe(
        map((data) => {
          return data; // Devuelve los datos recibidos
        })
      )
      .subscribe((data) => {
        // Aquí puedes realizar cualquier otra acción con los datos recibidos
      });
  }

  getStudents(): Observable<IStudent[]> {
    return this.http.get<IStudent[]>(this.url + '/students').pipe(
      map((response) => {
        return response;
      })
    );
  }

  createStudent(data: IStudentForm): Observable<any> {
    return this.http.post<any>(this.url + '/students', data);
    // const id = this.students.length + 1;
    // this.students.push({ ...data, id: id });
  }

  findStudent(id: number): Observable<IStudent> {
    return this.http.get<IStudent>(this.url + '/students/' + id).pipe(
      map((response) => {
        return response;
      })
    );
    // const student = this.students.find((student) => student.id === id);
    // if (student) return student;
    // return undefined;
  }

  updateStudentService(id: number, data: IStudentForm): Observable<any> {
    return this.http.patch<any>(this.url + '/students/' + id, data);
    // const student = this.students.find((student) => student.id === id);

    // if (student) {
    //   student.name = data.name;
    //   student.lastname = data.lastname;
    //   student.email = data.email;
    //   student.enabled = data.enabled;
    // }
  }

  deleteStudent(id: number): Observable<any> {
    return this.http.delete<any>(this.url + '/students/' + id);
    // const index = this.students.findIndex((s) => s.id === id);
    // if (index !== -1) this.students.splice(index, 1);
  }

  addCourseToStudent(course: ICourse, id: number): Observable<any> {
    return this.http.get<IStudent>(this.url + '/students/' + id).pipe(
      switchMap((response: IStudent) => {
        // Actualizar el array de cursos en el objeto temporal

        const newData: IDetailCourse = {
          course,
          finished: false,
        };
        let isTemporal: IStudent = response;
        isTemporal.courses = [...response.courses, newData];

        // Realizar la solicitud PATCH y devolver el observable resultante
        return this.http.patch<any>(this.url + '/students/' + id, {
          courses: isTemporal.courses,
        });
      })
    );
  }

  // finishedCourseStudent(id_student: number, id_course: number): void {
  //   const student = this.students.find((student) => student.id === id_student);
  //   if (student && student.courses) {
  //     const course = student.courses.find(
  //       (course) => course.course.id === id_course
  //     );
  //     if (course) {
  //       course.finished = true;
  //     }
  //   }
  // }

  deleteCourseStudent(id_student: number, id_course: number): Observable<any> {
    return this.http.get<IStudent>(this.url + '/students/' + id_student).pipe(
      switchMap((response) => {
        this.studentTemporal = response;

        // Filtra los cursos, excluyendo el que se desea eliminar
        const courses = this.studentTemporal.courses.filter(
          (course: IDetailCourse) => course.course.id !== id_course
        );

        // Realiza la solicitud PATCH con los cursos filtrados
        return this.http.patch<any>(this.url + '/students/' + id_student, {
          courses: courses,
        });
      })
    );
  }
}
