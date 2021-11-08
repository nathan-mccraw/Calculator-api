export class Expression {
    constructor(userId, firstOperand, secondOperand, operator) {
        this.userId = userId;
        this.firstOperand = parseFloat(firstOperand);
        this.secondOperand = parseFloat(secondOperand);
        this.operator = operator;
    }
}
//# sourceMappingURL=expression.model.js.map