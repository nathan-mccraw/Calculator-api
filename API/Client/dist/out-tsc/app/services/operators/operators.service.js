import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
let OperatorsService = class OperatorsService {
    constructor(http) {
        this.http = http;
    }
    getOperators() {
        return this.http
            .get('https://localhost:5001/api/operations');
    }
};
OperatorsService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], OperatorsService);
export { OperatorsService };
//# sourceMappingURL=operators.service.js.map