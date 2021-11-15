import { Injectable } from "@angular/core";
import { BehaviorSubject, Subject } from "rxjs";
import { FormData } from "./../../Model/formData.model";

@Injectable({
    providedIn: 'root',
  })
  export class FormDataService {
    formData: Subject<FormData> = new BehaviorSubject({
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
  
    updateFormData(newData: FormData) {
      this.formData.next(newData);
    }
  }