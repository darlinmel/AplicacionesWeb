import { PartialType } from "@nestjs/swagger";
import { baseClientDTO } from "./base-client.dto";

export class updateClientDTO extends PartialType(baseClientDTO){
    
}