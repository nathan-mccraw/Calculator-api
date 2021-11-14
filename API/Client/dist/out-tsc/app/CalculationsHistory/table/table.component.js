import { __decorate } from "tslib";
import { Component } from '@angular/core';
let TableComponent = class TableComponent {
    constructor(calcDataService) {
        this.calcDataService = calcDataService;
        this.calculations = [];
    }
    ngOnInit() {
        this.subscription = this.calcDataService.calculationsWithUserData.subscribe((calcs) => (this.calculations = calcs));
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
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