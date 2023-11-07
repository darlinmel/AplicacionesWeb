import { Exclude, Expose} from 'class-transformer';
import { baseDoctorDTO } from './base-doctor.dto';

@Exclude()
export class readDoctorDTO extends baseDoctorDTO{
    @Expose()
    readonly nombre;
    
    @Expose()
    readonly description;
}