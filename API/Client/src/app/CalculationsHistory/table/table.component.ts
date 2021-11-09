import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { calculation } from './../../Model/calculation.model';
import { calculationsDataService } from '../../services/DataServices/calculationsData.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  constructor(private calcDataService: calculationsDataService) {}

  calculations: calculation[] = [];
  subscription: Subscription;

  ngOnInit(): void {
    this.subscription = this.calcDataService.calculationsWithUserData.subscribe(
      (_calcs) => (this.calculations = _calcs)
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  getAllCalculations() {
    this.calcDataService.updateCalcData();
  }
}
