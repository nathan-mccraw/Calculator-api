import { Component, OnInit } from '@angular/core';
import { ModalComponent } from '../AddUser/modal.component';
import { UsersService } from '../services/HttpServices/users.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CurrentUserService } from '../services/DataServices/currentUser.service';
import { calculationsDataService } from '../services/DataServices/calculationsData.service';

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
      .subscribe((resp) => this.currentUserService.updateCurrentUser(resp));
  }

  refreshTable() {
    this.calcDataService.updateCalcData();
  }
}
