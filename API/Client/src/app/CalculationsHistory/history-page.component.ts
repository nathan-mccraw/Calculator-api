import { Component, OnInit } from '@angular/core';
import { CalculateService } from './../services/HttpServices/calculate.service';
import { CalculationsDataService } from './../services/DataServices/calculationsData.service';
import { ClientParamsService } from '../services/DataServices/clientParams.service';
import { ClientParams } from '../Model/clientParams.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-history-page',
  templateUrl: './history-page.component.html',
  styleUrls: ['./history-page.component.css'],
})
export class HistoryPageComponent implements OnInit {
  clientParams: ClientParams;
  subscriptions : Subscription;

  constructor(
    private calcService: CalculateService,
    private calcDataService: CalculationsDataService,
    private clientParamsService: ClientParamsService
  ) { }

  ngOnInit(): void {
    this.subscriptions = this.clientParamsService.clientParams.subscribe((params) => this.clientParams = params);
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  refreshTable() {
    this.calcService
      .getCalculations(this.clientParams)
      .subscribe(data => {
        this.calcDataService.broadcastCalcsChange(data);
      });
  }

  nextPage() {
    this.clientParams.pageIndex += 1;
    this.refreshTable();
  }

  prevPage() {
    this.clientParams.pageIndex -= 1;
    this.refreshTable();
  }

  onPageClick(pageNumber){
    this.clientParams.pageIndex = pageNumber - 1;
    this.refreshTable();
  }
}
