import { User } from 'src/app/Model/user.model';

export class calculationDTO {
  public id: number;
  public user: User;
  public firstOperand: number;
  public secondOperand: number;
  public operator: string;
  public answer: number;
  public date: Date;
}
