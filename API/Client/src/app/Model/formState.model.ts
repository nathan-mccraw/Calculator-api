import { User } from './user.model';

export class FormState {
  public search: number = null;
  public searchFilter: string[] = [];
  public orderBy: string = 'Date';
  public sortOrder: string = 'ASC';
  public isUserFilter: boolean = false;
  public userFilter: number[] = [];
  public isDateFilter: boolean = false;
  public dateFilter: string = 'null';
  public dateFilterCriteria: string = 'On Selected Date';
  public isOperatorFilter: boolean = false;
  public operatorFilter: string[] = [];
}
