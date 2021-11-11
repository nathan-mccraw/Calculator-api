import { __decorate } from "tslib";
import { Component } from '@angular/core';
let TableComponent = class TableComponent {
    constructor(calcDataService) {
        this.calcDataService = calcDataService;
        this.calculations = [];
    }
    ngOnInit() {
        this.subscription = this.calcDataService.calculationsWithUserData.subscribe((_calcs) => (this.calculations = _calcs));
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
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