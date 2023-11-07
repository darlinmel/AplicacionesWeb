import { Exclude, Expose } from 'class-transformer';
import { BaseProductDto } from './base-product.dto';

@Expose()
@Exclude()
export class ReadProductDto extends BaseProductDto {
  @Expose()
  readonly id;
}
