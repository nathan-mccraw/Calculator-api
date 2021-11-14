import { calculationDTO } from './calculationDTO.model';
export class apiResponseDTO {
  public pageIndex: number;
  public pageSize: number;
  public count: number;
  public data: calculationDTO[];
}
