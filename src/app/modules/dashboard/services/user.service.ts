import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, map } from 'rxjs';
import { api_url } from 'src/app/core/environments/api';
import {
  ILogin,
  IUser,
  IUserForm,
} from 'src/app/core/models/interface/user.interface';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  url: string = api_url;
  constructor(private http: HttpClient, private router: Router) {}

  getUser(id: number): Observable<IUser> {
    return this.http.get<IUser>(this.url + '/users/' + id).pipe(
      map((response) => {
        return response;
      })
    );
  }

  registerUser(data: IUserForm): Observable<any> {
    return this.http.post<any>(this.url + '/users', data);
  }

  deleteUser(id: number): Observable<any> {
    return this.http.delete<any>(this.url + '/users/' + id);
  }

  // login and logout

  getUsers(): Observable<IUser[]> {
    return this.http.get<IUser[]>(this.url + '/users').pipe(
      map((response) => {
        return response;
      })
    );
  }

  login(data: ILogin): Observable<boolean> {
    return this.getUsers().pipe(
      map((response) => {
        const user = response.find((user) => user.email === data.email);
        if (user && user.password === data.password) {
          // this.store.dispatch(setUser({ user }));
          window.localStorage.setItem('user', JSON.stringify(user));
          return true;
        }
        return false;
      })
    );
  }
}
