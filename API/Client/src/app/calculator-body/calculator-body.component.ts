import { Component, OnInit } from '@angular/core';
import { OperatorsService } from '../services/operators/operators.service';
import { CalculateService } from '../services/calculate/calculate.service';
import { Expression } from '../Model/expression.model';

@Component({
  selector: 'app-calculator-body',
  templateUrl: './calculator-body.component.html',
  styleUrls: ['./calculator-body.component.css'],
})
export class CalculatorBodyComponent implements OnInit {
  ngOnInit(): void {
    this.getOperatorsArray();
  }

  constructor(
    private operatorsService: OperatorsService,
    private calculateService: CalculateService
  ) {}

  operators: string[] = [];
  storedOperator: string = '';
  firstOperand: string = '';
  secondOperand: string = '';
  currentOperand: string = '0';
  stickScreen: boolean = false;

  getOperatorsArray() {
    this.operatorsService.getOperators().subscribe((operations: string[]) => {
      this.operators = operations;
    });
  }

  onKeyPress(key) {
    if (key === '=' || key === 'Enter') {
      this.onCalculate();
    } else if (key === 'a') {
      this.onAllClear();
    } else if (key === 'c') {
      this.onClear();
    } else if (key === 'Backspace') {
      this.currentOperand =
        this.currentOperand.length > 1
          ? this.currentOperand.slice(0, -1)
          : (this.currentOperand = '0');
    } else if (this.operators.includes(key)) {
      this.onOperatorClick(key);
    } else if (!isNaN(key) || key === '.') {
      this.onAppendOperand(key);
    }
  }

  onAllClear() {
    this.stickScreen = false;
    this.firstOperand = '';
    this.secondOperand = '';
    this.storedOperator = '';
    this.currentOperand = '0';
  }

  onClear() {
    this.currentOperand = '0';
  }

  onNegativeClick() {
    if (this.currentOperand === '0') return;
    this.currentOperand =
      this.currentOperand[0] === '-'
        ? this.currentOperand.slice(1)
        : '-' + this.currentOperand;
  }

  onAppendOperand(num: string) {
    if (num === '.' && this.currentOperand.includes('.')) return;
    if (this.firstOperand !== '' && this.storedOperator === '') return;

    this.stickScreen = false;

    if (num === '.' && this.currentOperand === '') {
      this.currentOperand = '0.';
    } else if (this.currentOperand === '0') {
      this.currentOperand = num;
    } else {
      this.currentOperand += num;
    }
  }

  onOperatorClick(operator: string) {
    if (this.storedOperator !== '' && this.currentOperand !== '0') {
      let expression = new Expression(
        this.firstOperand,
        this.currentOperand,
        this.storedOperator
      );
      this.calculate(expression);
    } else if (this.firstOperand !== '') {
      this.secondOperand = this.currentOperand;
    } else {
      this.firstOperand = this.currentOperand;
    }

    this.stickScreen = true;
    this.currentOperand = '0';
    this.storedOperator = operator;
  }

  onCalculate() {
    if (this.storedOperator === '') return;

    let expression = new Expression(
      this.firstOperand,
      this.currentOperand,
      this.storedOperator
    );
    this.storedOperator = '';
    this.calculate(expression);
  }

  calculate(expression: Expression) {
    this.calculateService.postCalculation(expression).subscribe(
      (answer) => {
        this.firstOperand = answer;
        this.secondOperand = '';
        this.currentOperand = '0';
      },
      (error) => {
        this.currentOperand = '0';
        alert(
          `Invalid Expression: ${error.error}\n\nPlease retype the operator and the last operand to try again.\nOr to start over, clear all by clicking "AC" or pressing the 'a' key)`
        );
      }
    );

    this.stickScreen = true;
  }
}
