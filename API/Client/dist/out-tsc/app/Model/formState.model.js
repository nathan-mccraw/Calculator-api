export class FormState {
    constructor() {
        this.search = null;
        this.searchFilter = [];
        this.isSearchAll = true;
        this.isSearchFirstOperand = false;
        this.isSearchSecondOperand = false;
        this.isSearchAnswer = false;
        this.orderBy = 'Date';
        this.sortOrder = 'ASC';
        this.isUserFilter = false;
        this.userFilter = [];
        this.isDateFilter = false;
        this.dateFilter = 'null';
        this.dateFilterCriteria = 'On Selected Date';
        this.isOperatorFilter = false;
        this.operatorFilter = [];
    }
}
//# sourceMappingURL=formState.model.js.map