import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Expression } from './../../Model/expression.model';
import { calcNoUser } from './../../Model/calcNoUser.model';
import { apiResponseDTO } from './../../Model/apiResponse.model';
import { ClientParams } from './../../Model/clientParams.model';
import { map } from 'rxjs/operators';
import { ClientParamsService } from '../DataServices/clientParams.service';
import { CalculationsDataService } from '../DataServices/calculationsData.service';

@Injectable({
  providedIn: 'root',
})
export class CalculateService {
  constructor(private http: HttpClient, private clientParamsService: ClientParamsService) {}

  postCalculation(calculation: Expression) {
    return this.http.post<string>(
      'https://localhost:5001/api/calculations',
      calculation
    );
  }

  getCalculations(cp: ClientParams) {
    return this.http.get<apiResponseDTO>(
      `https://localhost:5001/api/Calculations?PageSize=${cp.pageSize}&PageIndex=${cp.pageIndex}`
    ).pipe(map((response) => {
      const newParams = new ClientParams();
      newParams.pageIndex = response.pageIndex;
      newParams.pageSize = response.pageSize;
      newParams.count = response.count;

      let index = 0;
      do{
        newParams.pages.push(index+1);
        index++;
      }while(newParams.pageSize * index < newParams.count)

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

      this.clientParamsService.broadcastCalcsChange(newParams);
      return response.data;
    }));
  }

  getCalculationsByUserId(userId: number) {
    return this.http.get<calcNoUser[]>(
      `https://localhost:5001/api/calculations/${userId}`
    );
  }
}
