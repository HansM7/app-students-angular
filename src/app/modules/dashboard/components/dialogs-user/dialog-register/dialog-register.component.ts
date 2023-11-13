import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-dialog-register',
  templateUrl: './dialog-register.component.html',
  styleUrls: ['./dialog-register.component.css'],
})
export class DialogRegisterComponentUser implements OnInit {
  userGroup: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<DialogRegisterComponentUser>,
    private userService: UserService
  ) {
    this.userGroup = this.formBuilder.group({
      fullname: ['', [Validators.required]],
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  ngOnInit() {}

  onSubmit(): void {
    if (this.userGroup.valid) {
      const formData = this.userGroup.getRawValue();

      this.userService.registerUser(formData).subscribe((data) => {});
      this.dialogRef.close();
    }
  }
}
