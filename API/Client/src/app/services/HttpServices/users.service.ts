import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../../Model/user.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private http: HttpClient) {}

  PostNewUser(user: User) {
    return this.http
      .post<number>('https://localhost:5001/api/Users', user)
      .pipe(
        map((userId) => {
          user.id = userId;
          return user;
        })
      );
  }

  getAllUsers() {
    return this.http.get<User[]>('https://localhost:5001/api/Users');
  }

  getUserById(userId: number) {
    return this.http.get<User>(`https://localhost:5001/api/Users/${userId}`);
  }
}
