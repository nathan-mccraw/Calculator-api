import { User } from "./user.model";

export class FormState{
    public search: number = null;
    public isSearchAll: boolean = true; 
    public isSearchFirstOperand: boolean = false;
    public isSearchSecondOperand: boolean = false;
    public isSearchAnswer: boolean = false;
    public sortOrder: string = "Ascending"; 
    public isUserFilter: boolean = false;
    public userFilter: number[] = [];
    public isDateFilter: boolean = false;
    public dateFilter: string = "null";
    public dateFilterCriteria: string = "On Selected Date";
    public isOperatorFilter: boolean = false;
    public operatorFilter: string[] = [];
}