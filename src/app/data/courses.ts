import { ETypeCourse } from '../core/models/enum/course.enum';
import { ICourse } from '../core/models/interface/course.interface';

export const courses: ICourse[] = [
  {
    id: 1,
    title: 'Java',
    description: 'Specialist in Java 2023',
    type: [ETypeCourse.PROGRAMMING, ETypeCourse.TECHNOLOGY],
    enabled: true,
  },
  {
    id: 2,
    title: 'React',
    description: 'Specialist in React 2023',
    type: [ETypeCourse.PROGRAMMING, ETypeCourse.TECHNOLOGY],
    enabled: true,
  },
  {
    id: 3,
    title: 'Power BI',
    description: 'Specialist in Power BI 2023',
    type: [ETypeCourse.DATA, ETypeCourse.TECHNOLOGY],
    enabled: true,
  },
];
