import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { user } from './../../Model/user.model';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private http: HttpClient) {}

  createNewUser(user: user) {
    return this.http.post<number>('https://localhost:5001/api/Users', user);
  }

  getAllUsers() {
    return this.http.get<user[]>('https://localhost:5001/api/Users');
  }

  getUserById(userId: number) {
    return this.http.get<user>(`https://localhost:5001/api/Users/${userId}`);
  }
}
