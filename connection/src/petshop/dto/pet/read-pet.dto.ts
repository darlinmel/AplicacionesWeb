import { Exclude, Expose} from 'class-transformer';
import { basePetDTO } from './base-pet.dto';

@Exclude()
export class readBaseDTO extends basePetDTO{
    @Expose()
    readonly nombre;
    
    @Expose()
    readonly raza;


}