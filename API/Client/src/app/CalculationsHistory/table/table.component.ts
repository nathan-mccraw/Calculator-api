import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { calculation } from './../../Model/calculation.model';
import { CalculationsDataService } from '../../services/DataServices/calculationsData.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  calculations: calculation[] = [];
  subscription: Subscription;

  constructor(private calcDataService: CalculationsDataService) {}

  ngOnInit(): void {
    this.subscription = this.calcDataService.calculationsWithUserData.subscribe(
      (calcs) => (this.calculations = calcs)
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
