import { ICourse } from './course.interface';

export interface ITeacherForm {
  fullname: string;
  enabled: boolean;
}

export interface ITeacher extends ITeacherForm {
  id: number;
  course: ICourse[] | [];
}
