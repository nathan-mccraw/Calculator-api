import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Expression } from './../../Model/expression.model';
import { calcNoUser } from './../../Model/calcNoUser.model';
import { apiResponseDTO } from './../../Model/apiResponse.model';

@Injectable({
  providedIn: 'root',
})
export class CalculateService {
  constructor(private http: HttpClient) {}

  postCalculation(calculation: Expression) {
    return this.http.post<string>(
      'https://localhost:5001/api/calculations',
      calculation
    );
  }

  getCalculations(pageSize: number, pageIndex: number) {
    return this.http.get<apiResponseDTO>(
      `https://localhost:5001/api/Calculations?PageSize=${pageSize}&PageIndex=${pageIndex}`
    );
  }

  getCalculationsByUserId(userId: number) {
    return this.http.get<calcNoUser[]>(
      `https://localhost:5001/api/calculations/${userId}`
    );
  }
}
