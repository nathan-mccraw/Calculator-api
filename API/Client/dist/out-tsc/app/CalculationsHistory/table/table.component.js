import { __decorate } from "tslib";
import { Component } from '@angular/core';
let TableComponent = class TableComponent {
    constructor(calcDataService, sortFormDataService, calcHttpService, cp) {
        this.calcDataService = calcDataService;
        this.sortFormDataService = sortFormDataService;
        this.calcHttpService = calcHttpService;
        this.cp = cp;
        this.calculations = [];
        this.subscriptions = [];
    }
    ngOnInit() {
        this.subscriptions.push(this.calcDataService.calculationsWithUserData.subscribe((calcs) => (this.calculations = calcs)));
        this.subscriptions.push(this.sortFormDataService.formState.subscribe((newState) => (this.formState = newState)));
        this.subscriptions.push(this.cp.clientParams.subscribe((newParams) => (this.clientParams = newParams)));
    }
    ngOnDestroy() {
        this.subscriptions.forEach((sub) => {
            sub.unsubscribe();
        });
    }
    sortForm(sortParam) {
        if (this.formState.orderBy === sortParam) {
            this.formState.sortOrder =
                this.formState.sortOrder === 'ASC' ? 'DESC' : 'ASC';
        }
        else {
            this.formState.orderBy = sortParam;
            this.formState.sortOrder = 'ASC';
        }
        this.sortFormDataService.updateFormState(this.formState);
        this.calcHttpService.getCalculations(this.clientParams).subscribe();
    }
    formatDate(date) {
        const formattedDate = new Date(date).toLocaleDateString();
        return formattedDate;
    }
    formatTime(date) {
        const time = new Date(date).toLocaleTimeString();
        return time;
    }
};
TableComponent = __decorate([
    Component({
        selector: 'app-table',
        templateUrl: './table.component.html',
        styleUrls: ['./table.component.css'],
    })
], TableComponent);
export { TableComponent };
//# sourceMappingURL=table.component.js.map