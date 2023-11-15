import {
  ComponentFixture,
  TestBed,
  fakeAsync,
  tick,
} from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { ProfileComponent } from './profile.component';
import { StudentService } from '../../services/student.service';
import { IStudent } from 'src/app/core/models/interface/student.interface';
import { students } from 'src/app/data/students';
import { AppTemplateComponent } from '../../components/app-template/app-template.component';
import { MatCardModule } from '@angular/material/card';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';

describe('ProfileComponent Tests', () => {
  let component: ProfileComponent;
  let fixture: ComponentFixture<ProfileComponent>;
  let studentService: jasmine.SpyObj<StudentService>;

  const mockActivatedRoute = {
    snapshot: {
      paramMap: {
        get: () => '2', // Replace '2' with the desired ID for your test
      },
    },
  };

  beforeEach(async () => {
    studentService = jasmine.createSpyObj('StudentService', ['findStudent']);

    await TestBed.configureTestingModule({
      declarations: [ProfileComponent, AppTemplateComponent],
      imports: [MatCardModule, MatToolbarModule, MatMenuModule],
      providers: [
        { provide: ActivatedRoute, useValue: mockActivatedRoute },
        {
          provide: StudentService,
          useValue: studentService,
        },
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileComponent);
    component = fixture.componentInstance;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch student details on initialization', fakeAsync(() => {
    const mockStudent: IStudent = students[0];
    studentService.findStudent.and.returnValue(of(mockStudent));

    fixture.detectChanges();
    tick();

    expect(component.student).toEqual(mockStudent);
  }));
});
