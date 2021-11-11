import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
let UsersService = class UsersService {
    constructor(http) {
        this.http = http;
    }
    PostNewUser(user) {
        return this.http
            .post('https://localhost:5001/api/Users', user)
            .pipe(map((userId) => {
            user.id = userId;
            return user;
        }));
    }
    getAllUsers() {
        return this.http.get('https://localhost:5001/api/Users');
    }
    getUserById(userId) {
        return this.http.get(`https://localhost:5001/api/Users/${userId}`);
    }
};
UsersService = __decorate([
    Injectable({
        providedIn: 'root',
    })
], UsersService);
export { UsersService };
//# sourceMappingURL=users.service.js.map