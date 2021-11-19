import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SortFormService } from './../../services/DataServices/sortForm.service';
import { FormState } from './../../Model/formState.model';
import { CalculationsDataService } from './../../services/DataServices/calculationsData.service';
import { CalculateService } from './../../services/HttpServices/calculate.service';
import { ClientParamsService } from 'src/app/services/DataServices/clientParams.service';
import { ClientParams } from 'src/app/Model/clientParams.model';
import { User } from './../../Model/user.model';
import { UsersService } from './../../services/HttpServices/users.service';
import { OperatorsService } from './../../services/HttpServices/operators.service';
import { SortFormData } from './../../Model/formData.model';
import { CalculationsData } from './../../Model/calculationsData.model';

@Component({
  selector: 'app-sortForm',
  templateUrl: './sortForm.component.html',
  styleUrls: ['./sortForm.component.css'],
})
export class SortFormComponent implements OnInit {
  formState: FormState;
  formData: SortFormData;
  calcsData: CalculationsData;
  clientParams: ClientParams;
  users: User[] = [];
  operatorsList: string[] = [];
  subscriptions: Subscription[] = [];

  constructor(
    private formService: SortFormService,
    private calcDataService: CalculationsDataService,
    private calcService: CalculateService,
    private clientParamsService: ClientParamsService,
    private usersService: UsersService,
    private operatorsService: OperatorsService
  ) {}

  ngOnInit(): void {
    this.subscriptions.push(
      this.formService.formState.subscribe(
        (newState) => (this.formState = newState)
      )
    );
    this.subscriptions.push(
      this.formService.formData.subscribe(
        (newData) => (this.formData = newData)
      )
    );
    this.subscriptions.push(
      this.clientParamsService.clientParams.subscribe(
        (newParams) => (this.clientParams = newParams)
      )
    );

    this.subscriptions.push(
      this.calcDataService.calculationsData.subscribe(
        (newCalcsData) => (this.calcsData = newCalcsData)
      )
    );
  }

  ngOnDestroy() {
    this.subscriptions.forEach((sub) => {
      sub.unsubscribe();
    });
  }

  onUserFilterClick() {
    console.log(this.formState);
    this.getUpdatedUsersList();
    if (this.formState.isUserFilter === false) {
      this.formState.userFilter = [];
    }

    this.formService.updateFormState(this.formState);
  }

  onDateFilterClick() {
    console.log(this.formState);
    if (this.formState.isDateFilter === false) {
      this.formState.dateFilter = null;
      this.formState.dateFilterCriteria = 'On Selected Date';
    }

    this.formService.updateFormState(this.formState);
    console.log(this.formService.formState);
  }

  onOperatorFilterClick() {
    this.getUpdatedOperatorsList();
    if (this.formState.isOperatorFilter === false) {
      this.formState.operatorFilter = [];
    }

    this.formService.updateFormState(this.formState);
  }

  getUpdatedUsersList() {
    this.usersService
      .getAllUsers()
      .subscribe((updatedUsers) => (this.formData.usersList = updatedUsers));
  }

  getUpdatedOperatorsList() {
    this.operatorsService
      .getOperators()
      .subscribe(
        (updatedOperators) => (this.formData.operatorsList = updatedOperators)
      );
  }

  UpdateUsersListInForm(userId: number) {
    const index = this.formState.userFilter.indexOf(userId);
    if (index === -1) {
      this.formState.userFilter.push(userId);
    } else {
      this.formState.userFilter.splice(index, 1);
    }
  }

  UpdateOperatorsListInForm(operator: string) {
    const index = this.formState.operatorFilter.indexOf(operator);
    if (index === -1) {
      this.formState.operatorFilter.push(operator);
    } else {
      this.formState.operatorFilter.splice(index, 1);
    }
  }

  resetSortForm() {
    const newFormState = new FormState();
    this.formService.updateFormState(newFormState);
  }

  resetTable() {
    const newClientParams = new ClientParams();
    this.clientParamsService.broadcastClientParamsChange(newClientParams);
    this.refreshTable();
  }

  refreshTable() {
    this.calcService.getCalculations(this.clientParams).subscribe(
      (newCalcData) => {
        this.calcsData.calcDTOs = newCalcData;
      },
      (error) => alert('Unable to get Calculations'),
      () => {
        this.calcsData.isDataLoading = false;
        this.calcDataService.updateCalcData(this.calcsData);
      }
    );
  }

  onSubmit() {
    if (!isNaN(this.formState.search)) {
      this.formService.updateFormState(this.formState);
      this.refreshTable();
    } else {
      alert('Invalid search, only value decimal numbers are accepted');
    }
  }
}
