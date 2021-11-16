import { __decorate } from "tslib";
import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { FormState } from "./../../Model/formState.model";
import { SortFormData } from "./../../Model/formData.model";
let SortFormService = class SortFormService {
    constructor() {
        this.formState = new BehaviorSubject(new FormState);
        this.formData = new BehaviorSubject(new SortFormData);
    }
    updateFormData(newData) {
        this.formData.next(newData);
    }
    updateFormState(newState) {
        this.formState.next(newState);
        console.log(this.formState);
    }
};
SortFormService = __decorate([
    Injectable({
        providedIn: 'root',
    })
], SortFormService);
export { SortFormService };
//# sourceMappingURL=sortForm.service.js.map