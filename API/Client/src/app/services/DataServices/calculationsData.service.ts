import { Injectable } from '@angular/core';
import { ReplaySubject, Subject } from 'rxjs';
import { calculation } from './../../Model/calculation.model';

@Injectable({
  providedIn: 'root',
})
export class CalculationsDataService {
  calculationsWithUserData: Subject<calculation[]> = new ReplaySubject();

  constructor() {}

  broadcastCalcsChange(calcs: calculation[]) {
    this.calculationsWithUserData.next(calcs);
  }
}
