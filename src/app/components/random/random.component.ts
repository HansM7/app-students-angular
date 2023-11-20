import { Component, OnInit } from '@angular/core';
import { ICourse } from 'src/app/core/models/interface/course.interface';
import { IStudent } from 'src/app/core/models/interface/student.interface';
import { ITeacher } from 'src/app/core/models/interface/tracher.interface';
import { CourseService } from 'src/app/modules/dashboard/services/course.service';
import { StudentService } from 'src/app/modules/dashboard/services/student.service';
import { TeacherService } from 'src/app/modules/dashboard/services/teacher.service';

import Chart from 'chart.js/auto';

@Component({
  selector: 'app-random',
  templateUrl: './random.component.html',
  styleUrls: ['./random.component.scss'],
})
export class RandomComponent implements OnInit {
  courses!: ICourse[];
  students!: IStudent[];
  teachers!: ITeacher[];
  public chart: any;

  constructor(
    private teacherService: TeacherService,
    private studentService: StudentService,
    private courseService: CourseService
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
    this.createChart();
  }

  createChart() {
    this.chart = new Chart('MyChart', {
      type: 'bar', //this denotes tha type of chart

      data: {
        // values on X-Axis
        labels: [
          '2022-05-10',
          '2022-05-11',
          '2022-05-12',
          '2022-05-13',
          '2022-05-14',
          '2022-05-15',
          '2022-05-16',
          '2022-05-17',
        ],
        datasets: [
          {
            label: 'Sales',
            data: ['467', '576', '572', '79', '92', '574', '573', '576'],
            backgroundColor: 'blue',
          },
          {
            label: 'Profit',
            data: ['542', '542', '536', '327', '17', '0.00', '538', '541'],
            backgroundColor: 'limegreen',
          },
        ],
      },
      options: {
        aspectRatio: 2.5,
      },
    });
  }
}
