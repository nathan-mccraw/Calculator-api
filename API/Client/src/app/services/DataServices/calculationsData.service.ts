import { Injectable } from '@angular/core';
import { ReplaySubject, Subject } from 'rxjs';
import { calculationDTO } from '../../Model/calculationDTO.model';

@Injectable({
  providedIn: 'root',
})
export class CalculationsDataService {
  calculationsWithUserData: Subject<calculationDTO[]> = new ReplaySubject();

  constructor() {}

  broadcastCalcsChange(calcs: calculationDTO[]) {
    this.calculationsWithUserData.next(calcs);
  }
}
