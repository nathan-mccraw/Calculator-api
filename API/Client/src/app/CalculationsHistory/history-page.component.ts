import { Component, OnInit } from '@angular/core';
import { CalculateService } from './../services/HttpServices/calculate.service';
import { CalculationsDataService } from './../services/DataServices/calculationsData.service';
import { ClientParamsService } from '../services/DataServices/clientParams.service';
import { ClientParams } from '../Model/clientParams.model';
import { Subscription } from 'rxjs';
import { CalculationsData } from '../Model/calculationsData.model';

@Component({
  selector: 'app-history-page',
  templateUrl: './history-page.component.html',
  styleUrls: ['./history-page.component.css'],
})
export class HistoryPageComponent implements OnInit {
  clientParams: ClientParams;
  calcsData: CalculationsData;
  subscriptions: Subscription[] = [];

  constructor(
    private calcService: CalculateService,
    private calcDataService: CalculationsDataService,
    private clientParamsService: ClientParamsService
  ) {}

  ngOnInit(): void {
    this.subscriptions.push(
      this.clientParamsService.clientParams.subscribe(
        (params) => (this.clientParams = params)
      )
    );
    this.subscriptions.push(
      this.calcDataService.calculationsData.subscribe(
        (newCalcData) => (this.calcsData = newCalcData)
      )
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub) => {
      sub.unsubscribe();
    });
  }

  refreshTable() {
    this.calcService.getCalculations(this.clientParams).subscribe(
      (newCalcData) => {
        this.calcsData.calcDTOs = newCalcData;
        this.calcDataService.updateCalcData(this.calcsData);
      },
      (error) => alert('Unable to get Calculations'),
      () => {
        this.calcsData.isDataLoading = false;
        this.calcDataService.updateCalcData(this.calcsData);
      }
    );
  }

  nextPage() {
    this.clientParams.pageIndex += 1;
    this.refreshTable();
  }

  prevPage() {
    this.clientParams.pageIndex -= 1;
    this.refreshTable();
  }

  onPageNumberClick(pageNumber: number) {
    this.clientParams.pageIndex = pageNumber - 1;
    this.refreshTable();
  }
}
