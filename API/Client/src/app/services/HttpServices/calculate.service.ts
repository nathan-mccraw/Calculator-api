import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Expression } from './../../Model/expression.model';
import { calcNoUser } from './../../Model/calcNoUser.model';
import { apiResponseDTO } from './../../Model/apiResponse.model';
import { ClientParams } from './../../Model/clientParams.model';
import { map } from 'rxjs/operators';
import { ClientParamsService } from '../DataServices/clientParams.service';
import { SortFormService } from '../DataServices/sortForm.service';
import { FormState } from './../../Model/formState.model';
import { Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CalculateService {
  sortForm: FormState;
  subscriptions: Subscription;

  constructor(
    private http: HttpClient,
    private clientParamsService: ClientParamsService,
    private sortFormService: SortFormService
  ) {
    this.subscriptions = this.sortFormService.formState.subscribe(
      (newState) => (this.sortForm = newState)
    );
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

  private buildQueryURL(cp: ClientParams) {
    console.log(this.sortForm);
    let urlString: string = `https://localhost:5001/api/Calculations?PageSize=${cp.pageSize}&PageIndex=${cp.pageIndex}`;

    if (this.sortForm.search != null) {
      urlString += `&Search=${this.sortForm.search}`;
    }

    urlString += `&SortOrder=${this.sortForm.sortOrder}`;

    if (this.sortForm.isUserFilter) {
      this.sortForm.userFilter.forEach((userId) => {
        urlString += `&UserFilter=${userId}`;
      });
    }

    if (this.sortForm.isOperatorFilter) {
      const specialCharacters = [
        ',',
        '/',
        '?',
        ':',
        '@',
        '&',
        '=',
        '+',
        '$',
        '#',
      ];
      this.sortForm.operatorFilter.forEach((operator) => {
        let encodedOp: string;
        if (specialCharacters.includes(operator)) {
          encodedOp = encodeURIComponent(operator);
        } else {
          encodedOp = encodeURI(operator);
        }

        urlString += `&OperatorFilter=${encodedOp}`;
      });
    }

    if (this.sortForm.isDateFilter) {
      urlString += `&DateFilter=${this.sortForm.dateFilter}`;
      const encodedCrit = encodeURI(this.sortForm.dateFilterCriteria);
      urlString += `&DateFilterCriteria=${encodedCrit}`;
    }

    console.log(urlString);
    return urlString;
  }

  postCalculation(calculation: Expression) {
    return this.http.post<string>(
      'https://localhost:5001/api/calculations',
      calculation
    );
  }

  getCalculations(cp: ClientParams) {
    const urlString = this.buildQueryURL(cp);
    return this.http.get<apiResponseDTO>(urlString).pipe(
      map((response) => {
        const newParams = new ClientParams();
        newParams.pageIndex = response.pageIndex;
        newParams.pageSize = response.pageSize;
        newParams.count = response.count;

        let index = 0;
        do {
          newParams.pages.push(index + 1);
          index++;
        } while (newParams.pageSize * index < newParams.count);

        if (newParams.pageIndex + 1 < newParams.pages.length) {
          newParams.isNextDisabled = false;
        } else {
          newParams.isNextDisabled = true;
        }

        if (newParams.pageIndex > 0) {
          newParams.isPrevDisabled = false;
        } else {
          newParams.isPrevDisabled = true;
        }

        this.clientParamsService.broadcastClientParamsChange(newParams);
        return response.data;
      })
    );
  }

  getCalculationsByUserId(userId: number) {
    return this.http.get<calcNoUser[]>(
      `https://localhost:5001/api/calculations/${userId}`
    );
  }
}
