import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Expression } from './../../Model/expression.model';
import { ApiResponseDTO } from './../../Model/apiResponse.model';
import { CalculationsData } from '../../Model/calculationsData.model';
import { ClientParams } from './../../Model/clientParams.model';
import { map } from 'rxjs/operators';
import { ClientParamsService } from '../DataServices/clientParams.service';
import { SortFormService } from '../DataServices/sortForm.service';
import { FormState } from './../../Model/formState.model';
import { Subscription } from 'rxjs';
import { CalculationsDataService } from './../DataServices/calculationsData.service';
import { environment } from './../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CalculateService {
  sortForm: FormState;
  calcsData: CalculationsData = new CalculationsData();
  subscriptions: Subscription[] = [];

  constructor(
    private http: HttpClient,
    private clientParamsService: ClientParamsService,
    private sortFormService: SortFormService,
    private calcDataService: CalculationsDataService
  ) {
    this.subscriptions.push(
      this.sortFormService.formState.subscribe(
        (newState) => (this.sortForm = newState)
      )
    );

    this.subscriptions.push(
      this.calcDataService.calculationsData.subscribe(
        (newCalcs) => (this.calcsData = newCalcs)
      )
    );
  }

  ngOnDestroy() {
    this.subscriptions.forEach((sub) => {
      sub.unsubscribe();
    });
  }

  postCalculation(calculation: Expression) {
    return this.http.post<string>(
      `${environment.ApiUrl}/calculations`,
      calculation
    );
  }

  getCalculations(cp: ClientParams) {
    this.calcsData.isDataLoading = true;
    this.calcDataService.updateCalcData(this.calcsData);

    const urlString = this.buildQueryURL(cp);

    return this.http.get<ApiResponseDTO>(urlString).pipe(
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

  private buildQueryURL(cp: ClientParams) {
    let urlString: string = `${environment.ApiUrl}/Calculations?PageSize=${cp.pageSize}&PageIndex=${cp.pageIndex}`;

    if (this.sortForm.search != null) {
      urlString += `&Search=${this.sortForm.search}`;
    }

    urlString += `&SortOrder=${this.sortForm.sortOrder}`;

    urlString += `&OrderBy=${this.sortForm.orderBy}`;

    if (this.sortForm.isUserFilter) {
      this.sortForm.userFilter.forEach((userId) => {
        urlString += `&UserFilter=${userId}`;
      });
    }

    if (
      this.sortForm.isOperatorFilter &&
      this.sortForm.operatorFilter.length > 0
    ) {
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

    if (this.sortForm.isDateFilter && this.sortForm.dateFilter) {
      urlString += `&DateFilter=${this.sortForm.dateFilter}`;
      const encodedCrit = encodeURI(this.sortForm.dateFilterCriteria);
      urlString += `&DateFilterCriteria=${encodedCrit}`;
    }

    return urlString;
  }
}
