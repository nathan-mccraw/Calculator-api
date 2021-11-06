import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
let CalculatorScreenComponent = class CalculatorScreenComponent {
    constructor() {
        this.firstOperand = '';
        this.currentOperand = '';
        this.storedOperator = '';
        this.stickScreen = false;
    }
};
__decorate([
    Input()
], CalculatorScreenComponent.prototype, "firstOperand", void 0);
__decorate([
    Input()
], CalculatorScreenComponent.prototype, "currentOperand", void 0);
__decorate([
    Input()
], CalculatorScreenComponent.prototype, "storedOperator", void 0);
__decorate([
    Input()
], CalculatorScreenComponent.prototype, "stickScreen", void 0);
CalculatorScreenComponent = __decorate([
    Component({
        selector: 'app-calculator-screen',
        templateUrl: './calculator-screen.component.html',
        styleUrls: ['./calculator-screen.component.css'],
    })
], CalculatorScreenComponent);
export { CalculatorScreenComponent };
//# sourceMappingURL=calculator-screen.component.js.map