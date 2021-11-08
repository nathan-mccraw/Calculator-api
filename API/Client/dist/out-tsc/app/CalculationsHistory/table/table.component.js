import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { user } from './../../Model/user.model';
let TableComponent = class TableComponent {
    constructor(userService, calcService) {
        this.userService = userService;
        this.calcService = calcService;
        this.calculations = [];
    }
    ngOnInit() {
        this.getAllCalculations();
    }
    getAllCalculations() {
        this.calculations = [];
        let calcsNoUsers = [];
        this.calcService
            .getCalculations()
            .subscribe((data) => (calcsNoUsers = data));
        calcsNoUsers.forEach((calc) => {
            let calcUser = new user();
            this.userService
                .getUserById(calc.userId)
                .subscribe((data) => (calcUser = data));
            let newCalc = {
                user: calcUser,
                firstOperand: calc.firstOperand,
                operator: calc.operator,
                secondOperand: calc.secondOperand,
                answer: calc.answer,
            };
            console.log(newCalc);
            this.calculations.push(newCalc);
        });
    }
    // getAllCalculations() {
    //   this.calculations = [];
    //   this.calcService
    //     .getCalculations()
    //     .pipe(
    //       map((calcs: any) => {
    //         for (let calc of calcs) {
    //           let newCalc: calculation = {
    //             firstOperand: calc.firstOperand,
    //             operator: calc.operator,
    //             secondOperand: calc.secondOperand,
    //             answer: calc.answer,
    //           };
    //           this.userService
    //             .getUserById(calc.userId)
    //             .pipe(
    //               map((userData: any) => {
    //                 newCalc.user = userData;
    //               })
    //             )
    //             .subscribe(() => {
    //               this.calculations.push(newCalc);
    //             });
    //         }
    //         return calcs;
    //       })
    //     )
    //     .subscribe();
    // }
    refresh() {
        this.getAllCalculations();
    }
};
TableComponent = __decorate([
    Component({
        selector: 'app-table',
        templateUrl: './table.component.html',
        styleUrls: ['./table.component.css'],
    })
], TableComponent);
export { TableComponent };
//# sourceMappingURL=table.component.js.map