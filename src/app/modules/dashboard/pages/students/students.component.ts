import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { ICourse } from 'src/app/core/models/interface/course.interface';
import { IStudent } from 'src/app/core/models/interface/student.interface';
import { students } from 'src/app/data/students';
import { DialogRegisterComponent } from '../../components/dialogs/dialog-register/dialog-register.component';
import { courses } from 'src/app/data/courses';
import { DialogDeleteComponent } from '../../components/dialogs/dialog-delete/dialog-delete.component';
import { DialogEditComponent } from '../../components/dialogs/dialog-edit/dialog-edit.component';
import { DialogDetailComponent } from '../../components/dialogs/dialog-detail/dialog-detail.component';
import { UserService } from '../../services/user.service';
import { StudentService } from '../../services/student.service';
import { CourseService } from '../../services/course.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss'],
})
export class StudentsComponent {
  students: IStudent[] = [];
  dataSource: MatTableDataSource<IStudent> = new MatTableDataSource(
    this.students
  );
  displayedColumns: string[] = [
    'full_name',
    'email',
    'enabled',
    'courses',
    'edit',
    'delete',
    'detail',
  ];
  dataCourses: ICourse[] | undefined;

  constructor(
    public dialog: MatDialog,
    private studentService: StudentService,
    private courseService: CourseService
  ) {
    this.studentService.getStudents().subscribe((data: IStudent[]) => {
      console.log(data);
      this.students = data;
      this.dataSource.data = this.students;
    });
    this.courseService.findCourses().subscribe((data: ICourse[]) => {
      this.dataCourses = data;
    });
  }

  refreshData() {
    this.studentService.getStudents().subscribe((data: IStudent[]) => {
      this.students = data;
      this.dataSource.data = this.students;
    });
  }

  openDialogRegister(): void {
    const dialogRef = this.dialog.open(DialogRegisterComponent, {
      data: this.dataCourses,
    });
    dialogRef.afterClosed().subscribe(() => {
      this.refreshData();
    });
  }
  openDialogDelete(id: number): void {
    const dialogRef = this.dialog.open(DialogDeleteComponent, { data: id });
    dialogRef.afterClosed().subscribe(() => {
      this.refreshData();
    });
  }
  openDialogEdit(id: number) {
    const dialogRef = this.dialog.open(DialogEditComponent, {
      data: { id, courses: this.dataCourses },
    });
    dialogRef.afterClosed().subscribe(() => {
      this.refreshData();
    });
  }
  openDialogDetail(id: number) {
    const dialogRef = this.dialog.open(DialogDetailComponent, {
      data: { id, courses: this.dataCourses },
    });
    dialogRef.afterClosed().subscribe(() => {
      this.refreshData();
    });
  }
}
