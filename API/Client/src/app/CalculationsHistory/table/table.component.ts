import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { calculationDTO } from '../../Model/calculationDTO.model';
import { CalculationsDataService } from '../../services/DataServices/calculationsData.service';
import { SortFormService } from './../../services/DataServices/sortForm.service';
import { FormState } from './../../Model/formState.model';
import { CalculateService } from './../../services/HttpServices/calculate.service';
import { ClientParamsService } from './../../services/DataServices/clientParams.service';
import { ClientParams } from './../../Model/clientParams.model';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  calculations: calculationDTO[] = [];
  formState: FormState;
  clientParams: ClientParams;
  subscriptions: Subscription[] = [];

  constructor(
    private calcDataService: CalculationsDataService,
    private sortFormDataService: SortFormService,
    private calcHttpService: CalculateService,
    private cp: ClientParamsService
  ) {}

  ngOnInit(): void {
    this.subscriptions.push(
      this.calcDataService.calculationsWithUserData.subscribe(
        (calcs) => (this.calculations = calcs)
      )
    );
    this.subscriptions.push(
      this.sortFormDataService.formState.subscribe(
        (newState) => (this.formState = newState)
      )
    );
    this.subscriptions.push(
      this.cp.clientParams.subscribe(
        (newParams) => (this.clientParams = newParams)
      )
    );
  }

  ngOnDestroy() {
    this.subscriptions.forEach((sub) => {
      sub.unsubscribe();
    });
  }

  sortForm(sortParam: string) {
    if (this.formState.orderBy === sortParam) {
      this.formState.sortOrder =
        this.formState.sortOrder === 'ASC' ? 'DESC' : 'ASC';
    } else {
      this.formState.orderBy = sortParam;
      this.formState.sortOrder = 'ASC';
    }

    this.sortFormDataService.updateFormState(this.formState);
    this.calcHttpService
      .getCalculations(this.clientParams)
      .subscribe((data) => this.calcDataService.broadcastCalcsChange(data));
  }

  formatDate(date) {
    const formattedDate = new Date(date).toLocaleDateString();
    return formattedDate;
  }

  formatTime(date) {
    const time = new Date(date).toLocaleTimeString();
    return time;
  }
}
