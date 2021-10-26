export class Expression {
  public firstOperand: number;
  public secondOperand: number;
  public operation: string;

  constructor(firstOperand: string, secondOperand: string, operation: string) {
    this.firstOperand = parseFloat(firstOperand);
    this.secondOperand = parseFloat(secondOperand);
    this.operation = operation;
  }
}
