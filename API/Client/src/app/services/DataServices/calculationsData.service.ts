import { Injectable } from '@angular/core';
import { ReplaySubject, Subject } from 'rxjs';
import { CalculationsData } from '../../Model/calculationsData.model';

@Injectable({
  providedIn: 'root',
})
export class CalculationsDataService {
  calculationsData: Subject<CalculationsData> = new ReplaySubject();

  constructor() {}

  updateCalcData(newCalcs: CalculationsData) {
    this.calculationsData.next(newCalcs);
  }
}
