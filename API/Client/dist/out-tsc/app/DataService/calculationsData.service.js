import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { map } from 'rxjs/operators';
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
        let newCalcs = [];
        let calcsNoUsers = [];
        this.calcService
            .getCalculations()
            .pipe(map((resp) => {
            for (let calc of resp)
                calcsNoUsers.push(calc);
            calcsNoUsers.forEach((calc) => {
                let calcUser;
                this.userService
                    .getUserById(calc.userId)
                    .pipe(map((resp) => {
                    calcUser = resp;
                    let newCalc = {
                        user: calcUser,
                        firstOperand: calc.firstOperand,
                        operator: calc.operator,
                        secondOperand: calc.secondOperand,
                        answer: calc.answer,
                    };
                    return newCalc;
                }))
                    .subscribe((calc) => newCalcs.push(calc));
            });
        }))
            .subscribe();
        this.broadcastCalcsChange(newCalcs);
    }
};
calculationsDataService = __decorate([
    Injectable({
        providedIn: 'root',
    })
], calculationsDataService);
export { calculationsDataService };
//# sourceMappingURL=calculationsData.service.js.map