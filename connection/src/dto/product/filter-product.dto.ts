import { IsAlphanumeric, IsOptional, IsString } from "class-validator";
import { PaginationDto } from "./pagination.dto";

class FilterDto extends PaginationDto {
  @IsOptional()
  @IsString()
  readonly title;

  @IsOptional()
  @IsAlphanumeric()
  readonly code;
}
