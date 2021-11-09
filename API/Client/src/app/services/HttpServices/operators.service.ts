import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OperatorsService {

  constructor(private http: HttpClient) { }

  getOperators() {
    return this.http
      .get<string[]>('https://localhost:5001/api/operations');
  }
}
