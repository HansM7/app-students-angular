import { ICourse } from "./course.interface";

export interface IDetailCourse {
    course: ICourse,
    finished: boolean
}

export interface IStudentForm {
    name: string,
    lastname: string,
    email: string,
    enabled: boolean,
    courses: IDetailCourse[] | null,
}

export interface IStudent extends IStudentForm {
    id: number,
}