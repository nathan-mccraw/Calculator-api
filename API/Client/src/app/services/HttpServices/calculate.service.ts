import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, switchMap } from 'rxjs/operators';
import { forkJoin } from 'rxjs';
import { UsersService } from './users.service';
import { Expression } from './../../Model/expression.model';
import { calcNoUser } from './../../Model/calcNoUser.model';

@Injectable({
  providedIn: 'root',
})
export class CalculateService {
  constructor(private http: HttpClient, private userSerivce: UsersService) {}

  postCalculation(calculation: Expression) {
    return this.http.post<string>(
      'https://localhost:5001/api/calculations',
      calculation
    );
  }

  getCalculationsNoUser() {
    return this.http.get<calcNoUser[]>(
      'https://localhost:5001/api/calculations'
    );
  }

  getCalculationsByUserId(userId: number) {
    return this.http.get<calcNoUser[]>(
      `https://localhost:5001/api/calculations/${userId}`
    );
  }

  getCalculationsWithUser() {
    return this.http
      .get<calcNoUser[]>('https://localhost:5001/api/calculations')
      .pipe(
        switchMap((calcsNoUser) => {
          const requests = calcsNoUser.map((calc) => {
            return this.userSerivce.getUserById(calc.userId).pipe(
              map((user) => {
                return { ...calc, user };
              })
            );
          });
          return forkJoin(requests);
        })
      );
  }
}
