import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ICourse } from 'src/app/core/models/interface/course.interface';
import { IStudent } from 'src/app/core/models/interface/student.interface';
import { ITeacher } from 'src/app/core/models/interface/tracher.interface';
import { TeacherService } from '../../services/teacher.service';
import { CourseService } from '../../services/course.service';
import { StudentService } from '../../services/student.service';
import Chart, { ChartType } from 'chart.js/auto';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  courses!: ICourse[];
  students!: IStudent[];
  teachers!: ITeacher[];

  chart!: Chart;

  constructor(
    private teacherService: TeacherService,
    private studentService: StudentService,
    private courseService: CourseService,
    private cdr: ChangeDetectorRef
  ) {
    this.studentService.getStudents().subscribe((response) => {
      this.students = response;
    });
    this.courseService.findCourses().subscribe((response) => {
      this.courses = response;
    });
    this.teacherService.findTeachers().subscribe((response) => {
      this.teachers = response;
    });
  }

  ngOnInit(): void {
    this.loadData();
  }

  ngAfterViewInit(): void {
    this.createChart();
  }

  loadData(): void {
    this.studentService.getStudents().subscribe((response) => {
      this.students = response;
      this.createChart();
    });

    this.courseService.findCourses().subscribe((response) => {
      this.courses = response;
      this.createChart();
    });

    this.teacherService.findTeachers().subscribe((response) => {
      this.teachers = response;
      this.createChart();
    });
  }

  createChart(): void {
    if (!this.students || !this.courses || !this.teachers) {
      return;
    }

    const data = {
      labels: ['Students', 'Teachers', 'Courses'],
      datasets: [
        {
          label: 'Dashboard Aplication',
          data: [
            this.students.length,
            this.teachers.length,
            this.courses.length,
          ],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 205, 86, 0.2)',
          ],
          borderColor: [
            'rgb(255, 99, 132)',
            'rgb(255, 159, 64)',
            'rgb(255, 205, 86)',
          ],
          borderWidth: 1,
        },
      ],
    };

    // Creamos la gráfica
    this.chart = new Chart('chart', {
      type: 'bar' as ChartType, // tipo de la gráfica
      data, // datos
    });

    this.cdr.detectChanges();
  }
}
