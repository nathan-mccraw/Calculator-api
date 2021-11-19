import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from './../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class OperatorsService {
  constructor(private http: HttpClient) {}

  getOperators() {
    return this.http.get<string[]>(`${environment.ApiUrl}/operations`);
  }
}
