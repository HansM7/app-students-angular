import { AbstractControl, ValidationErrors } from '@angular/forms';
import { students } from 'src/app/core/data/students';
import { IStudent } from 'src/app/core/models/interface/student.interface';

export function validateEmail(
  control: AbstractControl
): ValidationErrors | null {
  const email = control.value;
  const response = students.find((student) => student.email === email);
  if (response) {
    return {
      repeatEmail: true,
    };
  }
  return null;
}

export function validateEmailEdit(student: IStudent): any | null {
  return (control: AbstractControl): ValidationErrors | null => {
    const email = control.value;
    const response = students.find((student) => student.email === email);

    if (response && response.email !== student.email) {
      return {
        repeatEmailEdit: true,
      };
    }
    return null;
  };
}
