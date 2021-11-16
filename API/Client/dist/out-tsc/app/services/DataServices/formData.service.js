import { __decorate } from "tslib";
import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
let FormDataService = class FormDataService {
    constructor() {
        this.formData = new BehaviorSubject({
            search: null,
            searchCriteriaAll: false,
            searchCriteriaFirstOperand: false,
            searchCriteriaSecondOperand: false,
            searchCriteriaAnswer: false,
            sort: "Ascending",
            userFilter: "",
            dateFiler: "",
            dateCriteria: "",
            operatorFilter: ""
        });
    }
    updateFormData(newData) {
        this.formData.next(newData);
    }
};
FormDataService = __decorate([
    Injectable({
        providedIn: 'root',
    })
], FormDataService);
export { FormDataService };
//# sourceMappingURL=formData.service.js.map