import { Component, OnInit } from '@angular/core';
import { CourseService } from '../../services/course.service';
import { ICourse } from 'src/app/core/models/interface/course.interface';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { DialogRegisterCourseComponent } from '../../components/dialogs-course/dialog-register-course/dialog-register-course.component';
import { DialogEditCourseComponent } from '../../components/dialogs-course/dialog-edit-course/dialog-edit-course.component';
import { DialogDeleteCourseComponent } from '../../components/dialogs-course/dialog-delete-course/dialog-delete-course.component';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent implements OnInit {
  courses!: ICourse[];

  dataSource: MatTableDataSource<ICourse> = new MatTableDataSource(
    this.courses
  );
  displayedColumns: string[] = [
    'id',
    'title',
    'image',
    'type',
    'enabled',
    'edit',
    'delete',
  ];

  constructor(
    private courseService: CourseService,
    private matDialog: MatDialog
  ) {
    this.courseService.findCourses().subscribe((response) => {
      this.courses = response;
      this.dataSource.data = this.courses;
    });
  }

  ngOnInit() {}

  refreshData() {
    this.courseService.findCourses().subscribe((response) => {
      this.courses = response;
      this.dataSource.data = this.courses;
    });
  }

  openDialogRegister() {
    const dialogRef = this.matDialog.open(DialogRegisterCourseComponent);
    dialogRef.afterClosed().subscribe(() => {
      this.refreshData();
    });
  }
  openDialogEdit(course: ICourse) {
    const dialogRef = this.matDialog.open(DialogEditCourseComponent, {
      data: course,
    });
    dialogRef.afterClosed().subscribe(() => {
      this.refreshData();
    });
  }
  openDialogDelete(course: ICourse) {
    const dialogRef = this.matDialog.open(DialogDeleteCourseComponent, {
      data: course,
    });
    dialogRef.afterClosed().subscribe(() => {
      this.refreshData();
    });
  }
}
