import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { CourseService } from '../../services/course.service';
import { StudentService } from '../../services/student.service';
import { TeacherService } from '../../services/teacher.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  dataSource: MatTableDataSource<any>; // Asegúrate de que el tipo coincida con tu estructura de datos
  displayedColumns: string[] = ['student', 'course', 'action'];

  constructor(private studentService: StudentService) {
    this.dataSource = new MatTableDataSource();

    this.studentService.getStudents().subscribe((students) => {
      const data: any = [];

      students.forEach((student) => {
        student.courses.forEach((course) => {
          const rowData = {
            id: student.id,
            student: `${student.name} ${student.lastname}`,
            course: course.course.title,
            action: 'Alguna acción aquí',
          };
          data.push(rowData);
        });
      });
      this.dataSource.data = data;
    });
  }

  ngOnInit() {}
}
