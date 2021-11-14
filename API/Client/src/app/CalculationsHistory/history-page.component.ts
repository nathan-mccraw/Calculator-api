import { Component, OnInit } from '@angular/core';
import { CalculateService } from './../services/HttpServices/calculate.service';
import { CalculationsDataService } from './../services/DataServices/calculationsData.service';

@Component({
  selector: 'app-history-page',
  templateUrl: './history-page.component.html',
  styleUrls: ['./history-page.component.css'],
})
export class HistoryPageComponent implements OnInit {
  pageNumber: number = 1;
  pageSize: number = 10;
  totalResults: number = 0;
  isPrevDisabled = true;
  isNextDisabled = true;

  constructor(
    private calcService: CalculateService,
    private calcDataService: CalculationsDataService
  ) {}

  ngOnInit(): void {}

  refreshTable() {
    this.calcService
      .getCalculations(this.pageSize, this.pageNumber - 1)
      .subscribe((response) => {
        this.pageNumber = response.pageIndex + 1;
        this.pageSize = response.pageSize;
        this.totalResults = response.count;

        if (this.pageSize * this.pageNumber < this.totalResults) {
          this.isNextDisabled = false;
        } else {
          this.isNextDisabled = true;
        }

        if (this.pageNumber > 1) {
          this.isPrevDisabled = false;
        } else {
          this.isPrevDisabled = true;
        }

        this.calcDataService.broadcastCalcsChange(response.data);
      });
  }

  nextPage() {
    this.pageNumber += 1;
    this.refreshTable();
  }

  prevPage() {
    this.pageNumber -= 1;
    this.refreshTable();
  }
}
