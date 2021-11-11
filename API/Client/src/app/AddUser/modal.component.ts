import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { user } from './../Model/user.model';
import { UsersService } from './../services/HttpServices/users.service';
import { CurrentUserService } from './../services/DataServices/currentUser.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent {
  newUser: user = new user();

  constructor(
    public activeModal: NgbActiveModal,
    private userService: UsersService,
    private currentUserService: CurrentUserService
  ) {}

  createNewUser() {
    this.userService.PostNewUser(this.newUser).subscribe(
      (userFetched) => {
        this.newUser = userFetched;
        this.currentUserService.updateCurrentUser(userFetched);
        this.activeModal.close();
      },
      (error) => {
        alert(`Invalid Input: ${error.error}\n\nPlease try again.`);
      }
    );
  }
}
