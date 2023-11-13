import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { api_url } from 'src/app/core/environments/api';
import { IUser, IUserForm } from 'src/app/core/models/interface/user.interface';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  url: string = api_url;
  constructor(private http: HttpClient) {}

  getUsers(): Observable<IUser[]> {
    return this.http.get<IUser[]>(this.url + '/users').pipe(
      map((response) => {
        return response;
      })
    );
  }
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
}
