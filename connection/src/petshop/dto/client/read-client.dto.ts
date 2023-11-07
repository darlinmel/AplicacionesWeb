import { Exclude, Expose} from 'class-transformer';
import { baseClientDTO } from './base-client.dto';

@Exclude()
export class readClientDTO extends baseClientDTO{
    @Expose()
    readonly nombre;
    
    @Expose()
    readonly description;
}