import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { User } from '../Model/user.model';
let AddUserModalComponent = class AddUserModalComponent {
    constructor(activeModal, userService, currentUserService) {
        this.activeModal = activeModal;
        this.userService = userService;
        this.currentUserService = currentUserService;
        this.newUser = new User();
    }
    createNewUser() {
        this.userService.PostNewUser(this.newUser).subscribe((userFetched) => {
            this.newUser = userFetched;
            this.currentUserService.updateCurrentUser(userFetched);
            this.activeModal.close();
        }, (error) => {
            alert(`Invalid Input: ${error.error}\n\nPlease try again.`);
        });
    }
};
AddUserModalComponent = __decorate([
    Component({
        selector: 'app-addUserModal',
        templateUrl: './addUserModal.component.html',
        styleUrls: ['./addUserModal.component.css'],
    })
], AddUserModalComponent);
export { AddUserModalComponent };
//# sourceMappingURL=addUserModal.component.js.map