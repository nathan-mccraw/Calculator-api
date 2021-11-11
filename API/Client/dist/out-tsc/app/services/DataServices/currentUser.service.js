import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
let CurrentUserService = class CurrentUserService {
    constructor() {
        this.currentUser = new BehaviorSubject({
            id: 1,
            username: 'Guest',
            firstName: 'Guest',
            lastName: 'Guest',
        });
    }
    updateCurrentUser(newUser) {
        this.currentUser.next(newUser);
    }
};
CurrentUserService = __decorate([
    Injectable({
        providedIn: 'root',
    })
], CurrentUserService);
export { CurrentUserService };
//# sourceMappingURL=currentUser.service.js.map