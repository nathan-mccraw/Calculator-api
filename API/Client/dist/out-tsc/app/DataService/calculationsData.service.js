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
        console.log(this.calculationsWithUserData);
    }
    updateCalcData() {
        let newCalcs = [];
        this.calcService
            .getCalculations()
            .pipe(map((calcs) => {
            calcs.forEach((calc) => {
                let newCalc = {
                    firstOperand: calc.firstOperand,
                    operator: calc.operator,
                    secondOperand: calc.secondOperand,
                    answer: calc.answer,
                };
                this.userService
                    .getUserById(calc.userId)
                    .pipe(map((userData) => {
                    newCalc.user = userData;
                }))
                    .subscribe(() => {
                    newCalcs.push(newCalc);
                });
            });
            return calcs;
        }))
            .subscribe();
        console.log('updated calcs');
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