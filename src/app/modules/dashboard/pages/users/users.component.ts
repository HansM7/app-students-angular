import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { IUser } from 'src/app/core/models/interface/user.interface';
import { UserService } from '../../services/user.service';
import { DialogRegisterComponentUser } from '../../components/dialogs-user/dialog-register/dialog-register.component';
import { DialogDeleteComponentUser } from '../../components/dialogs-user/dialog-delete/dialog-delete.component';
import { Store } from '@ngrx/store';
import { selectAlertState } from 'src/app/core/store/alert/alert.selector';
import { AlertActions } from 'src/app/core/store/alert/alert.actions';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  isAlert: boolean = false;
  dataUsers: IUser[] = [];
  dataSource: MatTableDataSource<IUser> = new MatTableDataSource(
    this.dataUsers
  );
  displayedColumns: string[] = [
    'id',
    'full_name',
    'email',
    'role',
    'password',
    'delete',
  ];

  user: any;

  constructor(
    public dialog: MatDialog,
    private userService: UserService,
    private store: Store
  ) {
    this.userService.getUsers().subscribe((data: IUser[]) => {
      this.dataUsers = data;
      this.dataSource.data = this.dataUsers;
    });
    this.user = this.userService.captureUser();
    this.store.select(selectAlertState).subscribe((response: any) => {
      this.isAlert = response.active;
    });
  }

  ngOnInit() {}

  openDialogRegister(): void {
    const dialogRef = this.dialog.open(DialogRegisterComponentUser);
    dialogRef.afterClosed().subscribe(() => {
      this.store.dispatch(AlertActions.show());
      this.userService.getUsers().subscribe((data: IUser[]) => {
        this.dataUsers = data;
        this.dataSource.data = this.dataUsers;
      });

      setTimeout(() => {
        this.store.dispatch(AlertActions.hidden());
      }, 2000);
    });
  }

  openDialogDelete(id: number): void {
    const dialogRef = this.dialog.open(DialogDeleteComponentUser, {
      data: { id },
    });
    dialogRef.afterClosed().subscribe(() => {
      this.userService.getUsers().subscribe((data: IUser[]) => {
        this.dataUsers = data;
        this.dataSource.data = this.dataUsers;
      });
    });
  }
}
