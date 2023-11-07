import { Exclude, Expose} from 'class-transformer';
import { baseLocalDTO } from './base-local.dto';

@Exclude()
export class readLocalDTO extends baseLocalDTO{
    @Expose()
    readonly nombre;
    
    @Expose()
    readonly direccion;

    @Expose()
    readonly telefono;
}