import { Component, OnInit } from '@angular/core';
import {OperatorsService} from '../services/operators/operators.service';
import { CalculateService } from '../services/calculate/calculate.service';
import { Expression } from '../Model/expression.model';

@Component({
  selector: 'app-calculator-body',
  templateUrl: './calculator-body.component.html',
  styleUrls: ['./calculator-body.component.css']
})
export class CalculatorBodyComponent implements OnInit {

  ngOnInit(): void {
    this.getOperatorsArray();
  }

  operators: string[] = [];
  storedOperator: string = '';
  firstOperand:string = '';
  secondOperand: string = '';
  screenValue: string = '0';

  constructor(private operatorsService: OperatorsService, private calculateService: CalculateService) {  }

  getOperatorsArray() {
    this.operatorsService.getOperators()
      .subscribe((operations: string[]) => {
        this.operators = operations;
      });
  }

  onAllClear() {
    this.firstOperand = '';
    this.secondOperand = '';
    this.storedOperator = '';
    this.screenValue = '0';
  }

  onClear() {
    //this.currentOperand = '0';
    this.screenValue = '0';
  }

  onAppendOperand(num: string) {
    if (num === '.' && this.screenValue.includes('.')) return;

    //if (this.currentOperand === '0') {
    //  this.currentOperand = num;
    //} else {
    //  this.currentOperand += num;
    //}
    if (this.screenValue === '0') {
      this.screenValue = num;
    } else {
      this.screenValue += num;
    }
  }

  onOperatorClick(operator: string) {
    if (this.storedOperator !== '') {
      let expression = new Expression(this.firstOperand, this.screenValue, this.storedOperator);
      this.calculate(expression);
    } else {
      this.firstOperand = this.screenValue;
      this.screenValue = '0';
    }

    this.storedOperator = operator;
  }

  onCalculate() {
    if (this.storedOperator === '') return;

    let expression = new Expression(this.firstOperand, this.screenValue, this.storedOperator);
    this.calculate(expression);
  }

  calculate(expression) {
    console.log(expression);
    this.calculateService.postCalculation(expression)
      .subscribe((answer: string) => {
        this.firstOperand = answer;
        this.secondOperand = '';
        this.storedOperator = '';
        this.screenValue = '0';
      });
  }
}
