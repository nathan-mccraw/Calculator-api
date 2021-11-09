import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { user } from '../Model/user.model';
import { UsersService } from '../services/HttpServices/users.service';
import { CurrentUserService } from '../services/DataServices/currentUser.service';

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
        this.currentUserService.updateCurrentUser(this.newUser);
        this.activeModal.close();
      },
      (error) => {
        alert(`Invalid Input: ${error.error}\n\nPlease try again.`);
      }
    );
  }
}
