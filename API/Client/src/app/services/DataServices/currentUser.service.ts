import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { User } from '../../Model/user.model';

@Injectable({
  providedIn: 'root',
})
export class CurrentUserService {
  currentUser: Subject<User> = new BehaviorSubject({
    id: 1,
    username: 'Guest',
    firstName: 'Guest',
    lastName: 'Guest',
  });

  updateCurrentUser(newUser: User) {
    this.currentUser.next(newUser);
  }
}
