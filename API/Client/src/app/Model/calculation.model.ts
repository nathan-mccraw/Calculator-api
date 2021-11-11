import { user } from 'src/app/Model/user.model';

export class calculation {
  public id: number;
  public user: user;
  public firstOperand: number;
  public secondOperand: number;
  public operator: string;
  public answer: number;
}
