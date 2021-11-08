export class Expression {
  public userId: number;
  public firstOperand: number;
  public secondOperand: number;
  public operator: string;

  constructor(
    userId: number,
    firstOperand: string,
    secondOperand: string,
    operator: string
  ) {
    this.userId = userId;
    this.firstOperand = parseFloat(firstOperand);
    this.secondOperand = parseFloat(secondOperand);
    this.operator = operator;
  }
}
