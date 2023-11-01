import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { RouterModule } from '@angular/router';
import { NgMaterialModule } from 'src/app/shared/ng-material/ng-material.module';
import { AppTemplateComponent } from './components/app-template/app-template.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { SideItemsComponent } from './components/side-items/side-items.component';
import { HomeComponent } from './pages/home/home.component';
import { StudentsComponent } from './pages/students/students.component';
import { DialogDeleteComponent } from './components/dialogs/dialog-delete/dialog-delete.component';
import { DialogEditComponent } from './components/dialogs/dialog-edit/dialog-edit.component';
import { DialogRegisterComponent } from './components/dialogs/dialog-register/dialog-register.component';
import { PipesModule } from 'src/app/shared/pipes/pipes.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DialogDetailComponent } from './components/dialogs/dialog-detail/dialog-detail.component';
import { DirectivesModule } from 'src/app/shared/directives/directives.module';
import {
  MatAutocompleteSelectedEvent,
  MatAutocompleteModule,
} from '@angular/material/autocomplete';
import { TeachersComponent } from './pages/teachers/teachers.component';
import { DialogRegisterComponentTeacher } from './components/dialogs-teacher/dialog-register/dialog-register.component';
import { DialogEditComponentTeacher } from './components/dialogs-teacher/dialog-edit/dialog-edit.component';
import { DialogDeleteComponentTeacher } from './components/dialogs-teacher/dialog-delete/dialog-delete.component';
import { DialogDetailComponentTeacher } from './components/dialogs-teacher/dialog-detail/dialog-detail.component';

@NgModule({
  declarations: [
    DashboardComponent,
    AppTemplateComponent,
    SideItemsComponent,
    HomeComponent,
    StudentsComponent,
    TeachersComponent,
    DialogDeleteComponent,
    DialogEditComponent,
    DialogRegisterComponent,
    DialogDetailComponent,
    DialogRegisterComponentTeacher,
    DialogEditComponentTeacher,
    DialogDeleteComponentTeacher,
    DialogDetailComponentTeacher,
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    RouterModule,
    NgMaterialModule,
    MatToolbarModule,
    MatSidenavModule,
    MatMenuModule,
    PipesModule,
    DirectivesModule,
    MatMenuModule,
    MatAutocompleteModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class DashboardModule {}
