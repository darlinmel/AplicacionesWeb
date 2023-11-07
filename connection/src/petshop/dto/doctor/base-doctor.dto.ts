import {
    Allow,
    IsAlpha,
    IsAlphanumeric,
    IsEmail,
    IsNotEmpty,
    IsNumber,
    IsPositive,
    IsString,
} from "class-validator";

export class baseDoctorDTO {


    //Columnas
    @Allow()
    @IsNotEmpty(isNotEmptyValidationOptions())
    @IsString()
    @IsAlpha()
    readonly name: string;

    @Allow()
    @IsNotEmpty(isNotEmptyValidationOptions())
    @IsString()
    @IsAlpha()
    readonly fullName: string;

    @Allow()
    @IsNotEmpty(isNotEmptyValidationOptions())
    @IsString()
    @IsAlphanumeric()
    readonly address: string;

    @Allow()
    @IsNotEmpty(isNotEmptyValidationOptions())
    @IsEmail()
    readonly email: string;

    @Allow()
    @IsNotEmpty(isNotEmptyValidationOptions())
    @IsNumber()
    @IsPositive()
    readonly phone: number;

}

function isNotEmptyValidationOptions(): import("class-validator").ValidationOptions {
    return {
        message: 'El campo no puede estar vacío.',
    };
}
