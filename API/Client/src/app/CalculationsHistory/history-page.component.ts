import { Component, OnInit } from '@angular/core';
import { CalculateService } from './../services/HttpServices/calculate.service';
import { CalculationsDataService } from './../services/DataServices/calculationsData.service';

@Component({
  selector: 'app-history-page',
  templateUrl: './history-page.component.html',
  styleUrls: ['./history-page.component.css'],
})
export class HistoryPageComponent implements OnInit {
  constructor(
    private calcService: CalculateService,
    private calcDataService: CalculationsDataService
  ) {}

  ngOnInit(): void {}

  refreshTable() {
    this.calcService
      .getCalculationsWithUser()
      .subscribe((newCalcs) =>
        this.calcDataService.broadcastCalcsChange(newCalcs)
      );
  }
}
