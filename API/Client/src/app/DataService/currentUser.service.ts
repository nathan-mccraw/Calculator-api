import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { user } from '../Model/user.model';

@Injectable({
  providedIn: 'root',
})
export class CurrentUserService {
  currentUser: Subject<user> = new BehaviorSubject({
    id: 1,
    username: 'Guest',
    firstName: 'Guest',
    lastName: 'Guest',
  });

  broadcastUserChange(newUser: user) {
    this.currentUser.next(newUser);
  }
}
