import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
let CalculateService = class CalculateService {
    constructor(http) {
        this.http = http;
    }
    postCalculation(calculation) {
        return this.http.post('https://localhost:5001/api/calculations', calculation);
    }
    getCalculations(pageSize, pageIndex) {
        return this.http.get(`https://localhost:5001/api/Calculations?PageSize=${pageSize}&PageIndex=${pageIndex}`);
    }
    getCalculationsByUserId(userId) {
        return this.http.get(`https://localhost:5001/api/calculations/${userId}`);
    }
};
CalculateService = __decorate([
    Injectable({
        providedIn: 'root',
    })
], CalculateService);
export { CalculateService };
//# sourceMappingURL=calculate.service.js.map