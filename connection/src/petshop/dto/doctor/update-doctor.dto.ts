import { PartialType } from "@nestjs/swagger";
import { baseDoctorDTO } from "./base-doctor.dto";

export class updateDoctorDTO extends PartialType(baseDoctorDTO){
    
}