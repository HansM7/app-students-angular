import { ETypeCourse } from '../enum/course.enum';
import { ITeacher } from './tracher.interface';

export interface ICourseForm {
  title: string;
  description: string;
  type: ETypeCourse[];
  enabled: boolean;
}

export interface ICourse extends ICourseForm {
  id: number;
}
