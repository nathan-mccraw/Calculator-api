import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { AddUserModalComponent } from '../AddUser/addUserModal.component';
let NavbarComponent = class NavbarComponent {
    constructor(usersService, modalService, currentUserService) {
        this.usersService = usersService;
        this.modalService = modalService;
        this.currentUserService = currentUserService;
    }
    ngOnInit() {
        this.getUsers();
    }
    openModal() {
        this.modalService.open(AddUserModalComponent);
    }
    getUsers() {
        this.usersService.getAllUsers().subscribe((resp) => (this.users = resp));
    }
    getNewUser(userId) {
        this.usersService
            .getUserById(userId)
            .subscribe((resp) => this.currentUserService.updateCurrentUser(resp));
    }
};
NavbarComponent = __decorate([
    Component({
        selector: 'app-navbar',
        templateUrl: './navbar.component.html',
        styleUrls: ['./navbar.component.css'],
    })
], NavbarComponent);
export { NavbarComponent };
//# sourceMappingURL=navbar.component.js.map