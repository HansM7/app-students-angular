import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
// import { HomeComponent } from './modules/dashboard/pages/home/home.component';
import { UsersComponent } from './modules/dashboard/pages/users/users.component';
import { CoursesComponent } from './modules/dashboard/pages/courses/courses.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { DashboardModule } from './modules/dashboard/dashboard.module';
import { DialogsDirective } from './shared/directives/dialogs.directive';
import { AuthModule } from './modules/auth/auth.module';
import { StoreModule } from '@ngrx/store';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    DashboardModule,
    AuthModule,
    StoreModule.forRoot({}, {}),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
