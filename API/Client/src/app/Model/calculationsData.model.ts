export class CalculationDTO {
  public id: number;
  public username: string;
  public userId: number;
  public firstOperand: number;
  public secondOperand: number;
  public operator: string;
  public answer: number;
  public date: Date;
}

export class CalculationsData {
  public isDataLoading: boolean;
  public calcDTOs: CalculationDTO[] = [];
}
