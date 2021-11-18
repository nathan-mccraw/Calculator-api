import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { FormState } from './../../Model/formState.model';
import { ClientParams } from 'src/app/Model/clientParams.model';
let SortFormComponent = class SortFormComponent {
    constructor(formService, calcDataService, calcService, clientParamsService, usersService, operatorsService) {
        this.formService = formService;
        this.calcDataService = calcDataService;
        this.calcService = calcService;
        this.clientParamsService = clientParamsService;
        this.usersService = usersService;
        this.operatorsService = operatorsService;
        this.users = [];
        this.subscriptions = [];
    }
    ngOnInit() {
        this.subscriptions.push(this.formService.formState.subscribe((newState) => (this.formState = newState)));
        this.subscriptions.push(this.formService.formData.subscribe((newData) => (this.formData = newData)));
        this.subscriptions.push(this.clientParamsService.clientParams.subscribe((newParams) => (this.clientParams = newParams)));
    }
    ngOnDestroy() {
        this.subscriptions.forEach((sub) => {
            sub.unsubscribe();
        });
    }
    getUpdatedUsersList() {
        this.usersService
            .getAllUsers()
            .subscribe((updatedUsers) => (this.formData.usersList = updatedUsers));
    }
    getUpdatedOperatorsList() {
        this.operatorsService
            .getOperators()
            .subscribe((updatedOperators) => (this.formData.operatorsList = updatedOperators));
    }
    updateSearchListInForm(searchIn) {
        const index = this.formState.searchFilter.indexOf(searchIn);
        if (index === -1) {
            this.formState.searchFilter.push(searchIn);
        }
        else {
            this.formState.searchFilter.splice(index, 1);
        }
    }
    UpdateUsersListInForm(userId) {
        const index = this.formState.userFilter.indexOf(userId);
        if (index === -1) {
            this.formState.userFilter.push(userId);
        }
        else {
            this.formState.userFilter.splice(index, 1);
        }
    }
    UpdateOperatorsListInForm(operator) {
        const index = this.formState.operatorFilter.indexOf(operator);
        if (index === -1) {
            this.formState.operatorFilter.push(operator);
        }
        else {
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
        this.calcService.getCalculations(this.clientParams).subscribe((data) => {
            this.calcDataService.broadcastCalcsChange(data);
        });
    }
    onSubmit() {
        this.formService.updateFormState(this.formState);
        this.calcService.getCalculations(this.clientParams).subscribe((data) => {
            this.calcDataService.broadcastCalcsChange(data);
        });
    }
};
SortFormComponent = __decorate([
    Component({
        selector: 'app-sortForm',
        templateUrl: './sortForm.component.html',
        styleUrls: ['./sortForm.component.css'],
    })
], SortFormComponent);
export { SortFormComponent };
//# sourceMappingURL=sortForm.component.js.map