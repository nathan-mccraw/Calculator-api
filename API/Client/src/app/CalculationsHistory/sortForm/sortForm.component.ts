import { Component, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { FormDataService } from "./../../services/DataServices/formData.service";
import { FormData } from "./../../Model/formData.model";
import { CalculationsDataService } from "./../../services/DataServices/calculationsData.service";
import { CalculateService } from "./../../services/HttpServices/calculate.service";
import { ClientParamsService } from "src/app/services/DataServices/clientParams.service";
import { ClientParams } from "src/app/Model/clientParams.model";

@Component({
    selector: 'app-sortForm',
    templateUrl: './sortForm.component.html',
    styleUrls: ['./sortForm.component.css'],
  })
  export class SortFormComponent implements OnInit {
    formData: FormData;
    clientParams: ClientParams;
    subscriptions: Subscription[] = [];

    constructor(private formDataService: FormDataService, 
                private calcDataService: CalculationsDataService, 
                private calcService: CalculateService, 
                private clientParamsService: ClientParamsService) {}
  
    ngOnInit(): void {
        this.subscriptions.push(this.formDataService.formData.subscribe((newData) => this.formData = newData));
        this.subscriptions.push(this.clientParamsService.clientParams.subscribe((newParams) => this.clientParams = newParams));
    }
  
    ngOnDestroy() {
        this.subscriptions.forEach(sub => {
            sub.unsubscribe();
        });
    }

    resetSortForm(){
        const newFormData = {
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
        };
        this.formDataService.updateFormData(newFormData); 
    }
    
    resetTable(){
        this.clientParams = {
            pageIndex: 0, 
            pageSize: 10, 
            pages: [],
            count: 0, 
            isNextDisabled: true, 
            isPrevDisabled: true
        };
        this.refreshTable();
    }

    refreshTable() {
        this.calcService
          .getCalculations(this.clientParams)
          .subscribe(data => {
            this.calcDataService.broadcastCalcsChange(data);
          });
      }
  }