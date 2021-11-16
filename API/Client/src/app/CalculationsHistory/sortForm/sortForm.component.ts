import { Component, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { SortFormService } from "./../../services/DataServices/sortForm.service";
import { FormState } from "./../../Model/formState.model";
import { CalculationsDataService } from "./../../services/DataServices/calculationsData.service";
import { CalculateService } from "./../../services/HttpServices/calculate.service";
import { ClientParamsService } from "src/app/services/DataServices/clientParams.service";
import { ClientParams } from "src/app/Model/clientParams.model";
import { User } from "./../../Model/user.model";
import { UsersService } from "./../../services/HttpServices/users.service";
import { OperatorsService } from "./../../services/HttpServices/operators.service";
import { SortFormData } from "./../../Model/formData.model";

@Component({
    selector: 'app-sortForm',
    templateUrl: './sortForm.component.html',
    styleUrls: ['./sortForm.component.css'],
  })
  export class SortFormComponent implements OnInit {
    formState: FormState;
    formData: SortFormData;
    clientParams: ClientParams;
    users: User[] = [];
    operatorsList: string[];
    subscriptions: Subscription[] = [];

    constructor(private formService: SortFormService, 
                private calcDataService: CalculationsDataService, 
                private calcService: CalculateService, 
                private clientParamsService: ClientParamsService,
                private usersService: UsersService,
                private operatorsService: OperatorsService) {}
  
    ngOnInit(): void {
        this.subscriptions.push(this.formService.formState.subscribe((newState) => this.formState = newState));
        this.subscriptions.push(this.formService.formData.subscribe((newData) => this.formData = newData));
        this.subscriptions.push(this.clientParamsService.clientParams.subscribe((newParams) => this.clientParams = newParams));
    }
  
    ngOnDestroy() {
        this.subscriptions.forEach(sub => {
            sub.unsubscribe();
        });
    }

    getUpdatedUsersList(){
        this.usersService.getAllUsers().subscribe((updatedUsers) => this.formData.usersList = updatedUsers);
    }

    getUpdatedOperatorsList(){
        this.operatorsService.getOperators().subscribe((updatedOperators) => this.formData.operatorsList = updatedOperators);
    }

    UpdateUsersListInForm(userId: number){
        const index = this.formState.userFilter.indexOf(userId);
        if(index === -1){
            this.formState.userFilter.push(userId);
        } else {
            this.formState.userFilter.splice(index,1);
        }
    }

    UpdateOperatorsListInForm(operator: string){
        const index = this.formState.operatorFilter.indexOf(operator);
        if(index === -1){
            this.formState.operatorFilter.push(operator);
        } else {
            this.formState.operatorFilter.splice(index,1);
        }
    }

    resetSortForm(){
        const newFormState = new FormState;
        this.formService.updateFormState(newFormState); 
    }
    
    resetTable(){
        const newClientParams = new ClientParams;
        this.clientParamsService.broadcastClientParamsChange(newClientParams);
        this.refreshTable();
    }

    refreshTable() {
        this.calcService
          .getCalculations(this.clientParams)
          .subscribe(data => {
            this.calcDataService.broadcastCalcsChange(data);
          });
      }

      onSubmit(){
        this.formService.updateFormState(this.formState);
        this.calcService
        .getCalculations(this.clientParams)
        .subscribe(data => {
          this.calcDataService.broadcastCalcsChange(data);
        });
      }
  }