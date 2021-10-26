import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CalculateService {

  constructor(private http: HttpClient) { }

  postCalculation(calculation: object) {
    return this.http
      .post<string>('https://localhost:5001/api/calculations', calculation);
  }
}
