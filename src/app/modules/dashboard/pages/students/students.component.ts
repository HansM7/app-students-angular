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

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss'],
})
export class StudentsComponent {
  dataSource: MatTableDataSource<IStudent> = new MatTableDataSource(students);
  displayedColumns: string[] = [
    'full_name',
    'email',
    'enabled',
    'courses',
    'edit',
    'delete',
    'detail',
  ];
  dataCourses: ICourse[] = courses;

  constructor(public dialog: MatDialog) {}

  openDialogRegister(): void {
    const dialogRef = this.dialog.open(DialogRegisterComponent, {
      data: this.dataCourses,
    });
    dialogRef.afterClosed().subscribe(() => {
      this.dataSource.data = students;
    });
  }
  openDialogDelete(id: number): void {
    const dialogRef = this.dialog.open(DialogDeleteComponent, { data: id });
    dialogRef.afterClosed().subscribe(() => {
      this.dataSource.data = students;
    });
  }
  openDialogEdit(id: number) {
    const dialogRef = this.dialog.open(DialogEditComponent, {
      data: { id, courses: this.dataCourses },
    });
    dialogRef.afterClosed().subscribe(() => {
      this.dataSource.data = students;
    });
  }
  openDialogDetail(id: number) {
    const dialogRef = this.dialog.open(DialogDetailComponent, {
      data: { id, courses: this.dataCourses },
    });
    dialogRef.afterClosed().subscribe(() => {
      this.dataSource.data = students;
    });
  }
}
