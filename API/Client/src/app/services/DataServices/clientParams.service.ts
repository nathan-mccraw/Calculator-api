import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { ClientParams } from 'src/app/Model/clientParams.model';

@Injectable({
  providedIn: 'root',
})
export class ClientParamsService {
  clientParams: Subject<ClientParams> = new BehaviorSubject({
    pageIndex: 0, 
    pageSize: 10, 
    pages: [],
    count: 0, 
    isNextDisabled: true, 
    isPrevDisabled: true
  });

  constructor() {}

  broadcastCalcsChange(newParams: ClientParams) {
    this.clientParams.next(newParams);
  }
}