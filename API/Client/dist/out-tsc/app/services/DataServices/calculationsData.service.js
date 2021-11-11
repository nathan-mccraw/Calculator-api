import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
let calculationsDataService = class calculationsDataService {
    constructor(calcService, userService) {
        this.calcService = calcService;
        this.userService = userService;
        this.calculationsWithUserData = new ReplaySubject();
    }
    broadcastCalcsChange(calcs) {
        this.calculationsWithUserData.next(calcs);
    }
    updateCalcData() {
        let calcsNoUser = [];
        this.calcService
            .getCalculations()
            .subscribe((response) => (calcsNoUser = response));
        const newCalcs = [];
        for (const calc of calcsNoUser) {
            let calcUser;
            this.userService
                .getUserById(calc.userId)
                .subscribe((response) => (calcUser = response));
            newCalcs.push(this.createCalc(calcUser, calc));
        }
        this.broadcastCalcsChange(newCalcs);
    }
    createCalc(calcUser, calc) {
        let newCalc = {
            user: calcUser,
            firstOperand: calc.firstOperand,
            operator: calc.operator,
            secondOperand: calc.secondOperand,
            answer: calc.answer,
        };
        return newCalc;
    }
};
calculationsDataService = __decorate([
    Injectable({
        providedIn: 'root',
    })
], calculationsDataService);
export { calculationsDataService };
//# sourceMappingURL=calculationsData.service.js.map