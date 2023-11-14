import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { NgMaterialModule } from 'src/app/shared/ng-material/ng-material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, NgMaterialModule, FormsModule, ReactiveFormsModule],
  declarations: [AuthComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AuthModule {}
