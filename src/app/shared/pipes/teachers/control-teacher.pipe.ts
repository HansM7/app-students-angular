import { Pipe, PipeTransform } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Pipe({
  name: 'controlTeacher',
})
export class ControlTeacherPipe implements PipeTransform {
  transform(
    value: ValidationErrors | null | undefined,
    ...args: unknown[]
  ): unknown {
    if (value) {
      const errorMessages: string[] = [];

      if ('required' in value) {
        errorMessages.push('The field is required');
      }
      if ('minlength' in value) {
        errorMessages.push(
          'The field min ' + value['minlength'].requiredLength + ' characters'
        );
      }
      return errorMessages.join('. ');
    }

    return null;
  }
}
