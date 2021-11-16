import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
let ClientParamsService = class ClientParamsService {
    constructor() {
        this.clientParams = new BehaviorSubject({
            pageIndex: 0,
            pageSize: 10,
            pages: [],
            count: 0,
            isNextDisabled: true,
            isPrevDisabled: true
        });
    }
    broadcastClientParamsChange(newParams) {
        this.clientParams.next(newParams);
    }
};
ClientParamsService = __decorate([
    Injectable({
        providedIn: 'root',
    })
], ClientParamsService);
export { ClientParamsService };
//# sourceMappingURL=clientParams.service.js.map