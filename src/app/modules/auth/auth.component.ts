import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { UserService } from '../dashboard/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {
  loginGroup: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {
    this.loginGroup = this.formBuilder.group({
      email: [],
      password: [],
    });
  }

  ngOnInit() {}

  onSubmit() {
    if (this.loginGroup.valid) {
      const data = this.loginGroup.getRawValue();

      this.userService.login(data).subscribe((response) => {
        if (response) {
          this.router.navigate(['/dashboard']);
        } else {
          alert('Credenciales incorrectas');
        }
      });
    }
  }
}
