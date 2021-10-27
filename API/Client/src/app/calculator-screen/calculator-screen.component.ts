import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-calculator-screen',
  templateUrl: './calculator-screen.component.html',
  styleUrls: ['./calculator-screen.component.css'],
})
export class CalculatorScreenComponent {
  @Input() firstOperand = '';
  @Input() currentOperand = '';
  @Input() storedOperator = '';
  @Input() stickScreen = false;

  constructor() {}
}
