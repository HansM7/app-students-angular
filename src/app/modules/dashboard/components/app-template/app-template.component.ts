import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-template',
  templateUrl: './app-template.component.html',
  styleUrls: ['./app-template.component.scss'],
})
export class AppTemplateComponent implements OnInit {
  user: any;

  constructor(private router: Router, private userService: UserService) {
    this.user = this.userService.captureUser();
  }

  ngOnInit() {}

  logout(): void {
    window.localStorage.clear();
    this.router.navigate(['/auth']);
  }
}
