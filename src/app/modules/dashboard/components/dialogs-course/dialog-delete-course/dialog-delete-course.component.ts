import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ICourse } from 'src/app/core/models/interface/course.interface';
import { CourseService } from '../../../services/course.service';

@Component({
  selector: 'app-dialog-delete-course',
  templateUrl: './dialog-delete-course.component.html',
  styleUrls: ['./dialog-delete-course.component.scss'],
})
export class DialogDeleteCourseComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public course: ICourse,
    private dialogRef: MatDialogRef<DialogDeleteCourseComponent>,
    private courseService: CourseService
  ) {}

  ngOnInit() {}

  onDelete(id: number) {
    this.courseService.deleteCourseService(id).subscribe((response) => {
      this.dialogRef.close();
    });
  }
}
