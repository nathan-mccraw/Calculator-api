import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { map, switchMap } from 'rxjs/operators';
import { forkJoin } from 'rxjs';
let CalculateService = class CalculateService {
    constructor(http, userSerivce) {
        this.http = http;
        this.userSerivce = userSerivce;
    }
    postCalculation(calculation) {
        return this.http.post('https://localhost:5001/api/calculations', calculation);
    }
    getCalculationsNoUser() {
        return this.http.get('https://localhost:5001/api/calculations');
    }
    getCalculationsByUserId(userId) {
        return this.http.get(`https://localhost:5001/api/calculations/${userId}`);
    }
    getCalculationsWithUser() {
        return this.http
            .get('https://localhost:5001/api/calculations')
            .pipe(switchMap((calcsNoUser) => {
            const requests = calcsNoUser.map((calc) => {
                return this.userSerivce.getUserById(calc.userId).pipe(map((user) => {
                    return Object.assign(Object.assign({}, calc), { user });
                }));
            });
            return forkJoin(requests);
        }));
    }
};
CalculateService = __decorate([
    Injectable({
        providedIn: 'root',
    })
], CalculateService);
export { CalculateService };
//# sourceMappingURL=calculate.service.js.map