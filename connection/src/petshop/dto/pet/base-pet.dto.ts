import { Allow, IsAlpha, IsAlphanumeric, IsNotEmpty, IsNumber, IsPositive, IsString } from "class-validator";

export class basePetDTO{
    @Allow()
    @IsNotEmpty(isNotEmptyValidationOptions())
    @IsString()
    @IsAlpha()
    readonly title;

    @IsNotEmpty()
    @IsNumber()
    @IsPositive()

    readonly price;

    @IsNotEmpty()
    @IsAlphanumeric()
    readonly description;

    @IsNotEmpty()
    @IsAlphanumeric()
    readonly image;

}

function isNotEmptyValidationOptions(): import("class-validator").ValidationOptions {
    return {
        message: 'El título del producto no puede estar vacío.',
    };
}

