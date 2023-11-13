import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { IUser } from 'src/app/core/models/interface/user.interface';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-dialog-delete',
  templateUrl: './dialog-delete.component.html',
  styleUrls: ['./dialog-delete.component.css'],
})
export class DialogDeleteComponentUser implements OnInit {
  user: IUser | undefined;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<DialogDeleteComponentUser>,
    private userService: UserService
  ) {
    this.userService.getUser(data.id).subscribe((data) => {
      this.user = data;
    });
  }

  deleteUser(): void {
    if (this.user) {
      this.userService.deleteUser(this.user.id).subscribe(); //otro modo sería this.student = studentService.findStudent(id) as IStudent;
      this.dialogRef.close();
    }
  }

  ngOnInit(): void {}
}
