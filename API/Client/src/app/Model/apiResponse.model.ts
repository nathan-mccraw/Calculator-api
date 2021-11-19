import { CalculationDTO } from './calculationsData.model';
export class ApiResponseDTO {
  public pageIndex: number;
  public pageSize: number;
  public count: number;
  public data: CalculationDTO[];
}
