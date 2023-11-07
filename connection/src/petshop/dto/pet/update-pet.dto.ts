import { PartialType } from "@nestjs/swagger";
import { basePetDTO } from "./base-pet.dto";

export class updatePetDTO extends PartialType(basePetDTO){
    
}