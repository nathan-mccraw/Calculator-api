import { __decorate } from "tslib";
import { Component } from '@angular/core';
let HistoryPageComponent = class HistoryPageComponent {
    constructor(calcService, calcDataService) {
        this.calcService = calcService;
        this.calcDataService = calcDataService;
    }
    ngOnInit() { }
    refreshTable() {
        this.calcService
            .getCalculationsWithUser()
            .subscribe((newCalcs) => this.calcDataService.broadcastCalcsChange(newCalcs));
    }
};
HistoryPageComponent = __decorate([
    Component({
        selector: 'app-history-page',
        templateUrl: './history-page.component.html',
        styleUrls: ['./history-page.component.css'],
    })
], HistoryPageComponent);
export { HistoryPageComponent };
//# sourceMappingURL=history-page.component.js.map