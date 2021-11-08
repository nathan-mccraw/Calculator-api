import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { user } from './../../Model/user.model';
import { UsersService } from './../../services/users/users.service';
import { CurrentUserService } from './../../DataService/currentUser.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent {
  constructor(
    public activeModal: NgbActiveModal,
    private userService: UsersService,
    private currentUserService: CurrentUserService
  ) {}

  newUser: user = new user();

  createNewUser() {
    this.userService.createNewUser(this.newUser).subscribe(
      (userId) => {
        this.newUser.id = userId;
        this.currentUserService.broadcastUserChange(this.newUser);
        this.activeModal.close();
      },
      (error) => {
        alert(`Invalid Input: ${error.error}\n\nPlease try again.`);
      }
    );
  }
}
