import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { user } from './../../Model/user.model';
let ModalComponent = class ModalComponent {
    constructor(activeModal, userService, currentUserService) {
        this.activeModal = activeModal;
        this.userService = userService;
        this.currentUserService = currentUserService;
        this.newUser = new user();
    }
    createNewUser() {
        this.userService.createNewUser(this.newUser).subscribe((userId) => {
            this.newUser.id = userId;
            this.currentUserService.broadcastUserChange(this.newUser);
            this.activeModal.close();
        }, (error) => {
            alert(`Invalid Input: ${error.error}\n\nPlease try again.`);
        });
    }
};
ModalComponent = __decorate([
    Component({
        selector: 'app-modal',
        templateUrl: './modal.component.html',
        styleUrls: ['./modal.component.css'],
    })
], ModalComponent);
export { ModalComponent };
//# sourceMappingURL=modal.component.js.map