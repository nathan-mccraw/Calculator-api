import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../../Model/user.model';
import { map } from 'rxjs/operators';
import { environment } from './../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private http: HttpClient) {}

  PostNewUser(user: User) {
    return this.http.post<number>(`${environment.ApiUrl}/Users`, user).pipe(
      map((userId) => {
        user.id = userId;
        return user;
      })
    );
  }

  getAllUsers() {
    return this.http.get<User[]>(`${environment.ApiUrl}/Users`);
  }

  getUserById(userId: number) {
    return this.http.get<User>(`${environment.ApiUrl}/Users/${userId}`);
  }
}
