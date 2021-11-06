import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
let CalculateService = class CalculateService {
    constructor(http) {
        this.http = http;
    }
    postCalculation(calculation) {
        return this.http
            .post('https://localhost:5001/api/calculations', calculation);
    }
};
CalculateService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], CalculateService);
export { CalculateService };
//# sourceMappingURL=calculate.service.js.map