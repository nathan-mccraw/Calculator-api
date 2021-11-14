import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { ModalComponent } from './../AddUser/modal.component';
let NavbarComponent = class NavbarComponent {
    constructor(usersService, modalService, currentUserService, calcService, calcDataService) {
        this.usersService = usersService;
        this.modalService = modalService;
        this.currentUserService = currentUserService;
        this.calcService = calcService;
        this.calcDataService = calcDataService;
    }
    ngOnInit() {
        this.getUsers();
    }
    openModal() {
        this.modalService.open(ModalComponent);
    }
    getUsers() {
        this.usersService.getAllUsers().subscribe((resp) => (this.users = resp));
    }
    getNewUser(userId) {
        this.usersService
            .getUserById(userId)
            .subscribe((resp) => this.currentUserService.updateCurrentUser(resp));
    }
    refreshTable() {
        this.calcService
            .getCalculations(10, 0)
            .subscribe((response) => this.calcDataService.broadcastCalcsChange(response.data));
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