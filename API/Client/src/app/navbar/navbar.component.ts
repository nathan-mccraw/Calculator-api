import { Component, OnInit } from '@angular/core';
import { AddUserModalComponent } from '../AddUser/addUserModal.component';
import { UsersService } from './../services/HttpServices/users.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CurrentUserService } from '../services/DataServices/currentUser.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  users: object[];

  constructor(
    private usersService: UsersService,
    private modalService: NgbModal,
    private currentUserService: CurrentUserService,
  ) {}

  ngOnInit(): void {
    this.getUsers();
  }

  openModal() {
    this.modalService.open(AddUserModalComponent);
  }

  getUsers() {
    this.usersService.getAllUsers().subscribe((resp) => (this.users = resp));
  }

  getNewUser(userId: number) {
    this.usersService
      .getUserById(userId)
      .subscribe((resp) => this.currentUserService.updateCurrentUser(resp));
  }
}
