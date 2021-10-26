import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-operator-button',
  templateUrl: './operator-button.component.html',
  styleUrls: ['./operator-button.component.css'],
})
export class OperatorButtonComponent {
  @Input() operation = '';

  constructor() {}
}
