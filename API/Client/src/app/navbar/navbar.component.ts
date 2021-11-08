import { Component, OnInit } from '@angular/core';
import { ModalComponent } from '../AddUser/modal/modal.component';
import { UsersService } from './../services/users/users.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CurrentUserService } from './../DataService/currentUser.service';
import { calculationsDataService } from './../DataService/calculationsData.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor(
    private usersService: UsersService,
    private modalService: NgbModal,
    private currentUserService: CurrentUserService,
    private calcDataService: calculationsDataService
  ) {}

  users: object[];

  ngOnInit(): void {
    this.getUsers();
  }

  openModal() {
    this.modalService.open(ModalComponent);
  }

  getUsers() {
    this.usersService.getAllUsers().subscribe((resp) => (this.users = resp));
  }

  getNewUser(userId: number) {
    this.usersService
      .getUserById(userId)
      .subscribe((resp) => this.currentUserService.broadcastUserChange(resp));
  }

  refreshTable() {
    this.calcDataService.updateCalcData();
  }
}
