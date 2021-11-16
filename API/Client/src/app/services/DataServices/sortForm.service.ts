import { Injectable } from "@angular/core";
import { BehaviorSubject, Subject } from "rxjs";
import { FormState } from "./../../Model/formState.model";
import { User } from "./../../Model/user.model";
import { SortFormData } from "./../../Model/formData.model";

@Injectable({
    providedIn: 'root',
  })
  export class SortFormService {
    formState: Subject<FormState> = new BehaviorSubject(new FormState);
    formData: Subject<SortFormData> = new BehaviorSubject(new SortFormData);
  
    updateFormData(newData: SortFormData) {
      this.formData.next(newData);
    }

    updateFormState(newState: FormState){
      this.formState.next(newState);
      console.log(this.formState);
    }
  }