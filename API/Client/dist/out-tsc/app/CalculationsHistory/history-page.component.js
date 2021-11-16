import { __decorate } from "tslib";
import { Component } from '@angular/core';
let HistoryPageComponent = class HistoryPageComponent {
    constructor(calcService, calcDataService, clientParamsService) {
        this.calcService = calcService;
        this.calcDataService = calcDataService;
        this.clientParamsService = clientParamsService;
    }
    ngOnInit() {
        this.subscriptions = this.clientParamsService.clientParams.subscribe((params) => this.clientParams = params);
    }
    ngOnDestroy() {
        this.subscriptions.unsubscribe();
    }
    refreshTable() {
        this.calcService
            .getCalculations(this.clientParams)
            .subscribe(data => {
            this.calcDataService.broadcastCalcsChange(data);
        });
    }
    nextPage() {
        this.clientParams.pageIndex += 1;
        this.refreshTable();
    }
    prevPage() {
        this.clientParams.pageIndex -= 1;
        this.refreshTable();
    }
    onPageClick(pageNumber) {
        this.clientParams.pageIndex = pageNumber - 1;
        this.refreshTable();
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