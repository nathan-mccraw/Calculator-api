import { __decorate } from "tslib";
import { Component } from '@angular/core';
let HistoryPageComponent = class HistoryPageComponent {
    constructor(calcService, calcDataService) {
        this.calcService = calcService;
        this.calcDataService = calcDataService;
        this.pageNumber = 1;
        this.pageSize = 10;
        this.totalResults = 0;
        this.isPrevDisabled = true;
        this.isNextDisabled = true;
    }
    ngOnInit() { }
    refreshTable() {
        this.calcService
            .getCalculations(this.pageSize, this.pageNumber - 1)
            .subscribe((response) => {
            this.pageNumber = response.pageIndex + 1;
            this.pageSize = response.pageSize;
            this.totalResults = response.count;
            if (this.pageSize * this.pageNumber < this.totalResults) {
                this.isNextDisabled = false;
            }
            else {
                this.isNextDisabled = true;
            }
            if (this.pageNumber > 1) {
                this.isPrevDisabled = false;
            }
            else {
                this.isPrevDisabled = true;
            }
            this.calcDataService.broadcastCalcsChange(response.data);
        });
    }
    nextPage() {
        this.pageNumber += 1;
        this.refreshTable();
    }
    prevPage() {
        this.pageNumber -= 1;
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