import { Injectable } from '@angular/core';
import { ReplaySubject, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { calculation } from '../../Model/calculation.model';
import { CalculateService } from '../HttpServices/calculate.service';
import { UsersService } from '../HttpServices/users.service';
import { user } from '../../Model/user.model';

@Injectable({
  providedIn: 'root',
})
export class calculationsDataService {
  calculationsWithUserData: Subject<calculation[]> = new ReplaySubject();

  constructor(
    private calcService: CalculateService,
    private userService: UsersService
  ) {}

  broadcastCalcsChange(calcs: calculation[]) {
    this.calculationsWithUserData.next(calcs);
  }

  updateCalcData() {
    let newCalcs = [];
    let calcsNoUsers = [];
    this.calcService
      .getCalculations()
      .pipe(
        map((resp) => {
          for (let calc of resp) calcsNoUsers.push(calc);
          calcsNoUsers.forEach((calc) => {
            let calcUser: user;
            this.userService
              .getUserById(calc.userId)
              .pipe(
                map((resp) => {
                  calcUser = resp;
                  let newCalc: calculation = {
                    user: calcUser,
                    firstOperand: calc.firstOperand,
                    operator: calc.operator,
                    secondOperand: calc.secondOperand,
                    answer: calc.answer,
                  };
                  return newCalc;
                })
              )
              .subscribe((calc) => newCalcs.push(calc));
          });
        })
      )
      .subscribe();
    this.broadcastCalcsChange(newCalcs);
  }
}
