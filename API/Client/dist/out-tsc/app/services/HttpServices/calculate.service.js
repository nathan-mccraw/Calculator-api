import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { ClientParams } from './../../Model/clientParams.model';
import { map } from 'rxjs/operators';
let CalculateService = class CalculateService {
    constructor(http, clientParamsService, sortFormService) {
        this.http = http;
        this.clientParamsService = clientParamsService;
        this.sortFormService = sortFormService;
        this.subscriptions = this.sortFormService.formState.subscribe((newState) => (this.sortForm = newState));
    }
    ngOnDestroy() {
        this.subscriptions.unsubscribe();
    }
    postCalculation(calculation) {
        return this.http.post('https://localhost:5001/api/calculations', calculation);
    }
    getCalculations(cp) {
        const urlString = this.buildQueryURL(cp);
        return this.http.get(urlString).pipe(map((response) => {
            const newParams = new ClientParams();
            newParams.pageIndex = response.pageIndex;
            newParams.pageSize = response.pageSize;
            newParams.count = response.count;
            let index = 0;
            do {
                newParams.pages.push(index + 1);
                index++;
            } while (newParams.pageSize * index < newParams.count);
            if (newParams.pageIndex + 1 < newParams.pages.length) {
                newParams.isNextDisabled = false;
            }
            else {
                newParams.isNextDisabled = true;
            }
            if (newParams.pageIndex > 0) {
                newParams.isPrevDisabled = false;
            }
            else {
                newParams.isPrevDisabled = true;
            }
            this.clientParamsService.broadcastClientParamsChange(newParams);
            return response.data;
        }));
    }
    buildQueryURL(cp) {
        let urlString = `https://localhost:5001/api/Calculations?PageSize=${cp.pageSize}&PageIndex=${cp.pageIndex}`;
        if (this.sortForm.search != null) {
            urlString += `&Search=${this.sortForm.search}`;
        }
        urlString += `&SortOrder=${this.sortForm.sortOrder}`;
        urlString += `&OrderBy=${this.sortForm.orderBy}`;
        if (this.sortForm.isUserFilter) {
            this.sortForm.userFilter.forEach((userId) => {
                urlString += `&UserFilter=${userId}`;
            });
        }
        if (this.sortForm.isOperatorFilter) {
            const specialCharacters = [',', '/', '?', ':', '@', '&', '=', '+', '$', '#'];
            this.sortForm.operatorFilter.forEach((operator) => {
                let encodedOp;
                if (specialCharacters.includes(operator)) {
                    encodedOp = encodeURIComponent(operator);
                }
                else {
                    encodedOp = encodeURI(operator);
                }
                urlString += `&OperatorFilter=${encodedOp}`;
            });
        }
        if (this.sortForm.isDateFilter) {
            urlString += `&DateFilter=${this.sortForm.dateFilter}`;
            const encodedCrit = encodeURI(this.sortForm.dateFilterCriteria);
            urlString += `&DateFilterCriteria=${encodedCrit}`;
        }
        return urlString;
    }
};
CalculateService = __decorate([
    Injectable({
        providedIn: 'root',
    })
], CalculateService);
export { CalculateService };
//# sourceMappingURL=calculate.service.js.map