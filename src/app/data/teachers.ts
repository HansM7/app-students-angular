import { ITeacher } from '../core/models/interface/tracher.interface';
import { ICourse } from '../core/models/interface/course.interface';
import { courses } from './courses';

export const teachers: ITeacher[] = [
  {
    id: 1,
    fullname: 'Teacher Pedro',
    enabled: true,
    course: [courses[1]],
  },
];
