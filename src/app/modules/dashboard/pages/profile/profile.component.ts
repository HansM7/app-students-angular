import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IStudent } from 'src/app/core/models/interface/student.interface';
import { StudentService } from '../../services/student.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  id: string;
  student!: IStudent;

  constructor(
    private route: ActivatedRoute,
    private studentService: StudentService
  ) {
    this.id = this.route.snapshot.paramMap.get('id') as string;
  }

  ngOnInit() {
    this.studentService.findStudent(Number(this.id)).subscribe((response) => {
      this.student = response;
    });
  }
}
