import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
let CalculationsDataService = class CalculationsDataService {
    constructor() {
        this.calculationsWithUserData = new ReplaySubject();
    }
    broadcastCalcsChange(calcs) {
        this.calculationsWithUserData.next(calcs);
    }
};
CalculationsDataService = __decorate([
    Injectable({
        providedIn: 'root',
    })
], CalculationsDataService);
export { CalculationsDataService };
//# sourceMappingURL=calculationsData.service.js.map