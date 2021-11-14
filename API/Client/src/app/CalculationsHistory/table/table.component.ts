import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { calculationDTO } from '../../Model/calculationDTO.model';
import { CalculationsDataService } from '../../services/DataServices/calculationsData.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  calculations: calculationDTO[] = [];
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

  formatDate(date) {
    const formattedDate = new Date(date).toLocaleDateString();
    return formattedDate;
  }

  formatTime(date) {
    const time = new Date(date).toLocaleTimeString();
    return time;
  }
}
