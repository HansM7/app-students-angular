import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { ICourse } from 'src/app/core/models/interface/course.interface';
import { ITeacher } from 'src/app/core/models/interface/tracher.interface';
import { courses } from 'src/app/data/courses';
import { teachers } from 'src/app/data/teachers';
import { DialogRegisterComponentTeacher } from '../../components/dialogs-teacher/dialog-register/dialog-register.component';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.scss'],
})
export class TeachersComponent implements OnInit {
  dataSource: MatTableDataSource<ITeacher> = new MatTableDataSource(teachers);
  displayedColumns: string[] = [
    'id',
    'full_name',
    'enabled',
    'edit',
    'delete',
    'detail',
  ];
  dataCourses: ICourse[] = courses;

  constructor(public dialog: MatDialog) {}

  ngOnInit() {}

  openDialogRegister(): void {
    const dialogRef = this.dialog.open(DialogRegisterComponentTeacher, {
      data: this.dataCourses,
    });
    dialogRef.afterClosed().subscribe(() => {
      this.dataSource.data = teachers;
    });
  }
  openDialogEdit(id: Number): void {}
  openDialogDelete(id: Number): void {}
  openDialogDetail(id: Number): void {}

  registerTeacher(): void {}

  deleteTeacher(): void {}

  editTeacher(): void {}

  suspendTeacher(): void {}
}
