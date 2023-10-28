import { NgModule } from '@angular/core';
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
import { DashboardRoutingModule } from './dashboard-routing.module';
import { StudentsComponent } from './pages/students/students.component';
import { DialogDeleteComponent } from './components/dialogs/dialog-delete/dialog-delete.component';
import { DialogEditComponent } from './components/dialogs/dialog-edit/dialog-edit.component';
import { DialogRegisterComponent } from './components/dialogs/dialog-register/dialog-register.component';
import { PipesModule } from 'src/app/shared/pipes/pipes.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    DashboardComponent,
    AppTemplateComponent,
    SideItemsComponent,
    HomeComponent,
    StudentsComponent,
    DialogDeleteComponent,
    DialogEditComponent,
    DialogRegisterComponent,
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
    DashboardRoutingModule,
    PipesModule,
  ],
})
export class DashboardModule {}
