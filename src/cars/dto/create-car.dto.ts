import { IsNumber, IsString } from "class-validator";

export class CreateCarDto {
    @IsString()
    readonly marca: string;

    @IsString()
    readonly modelo: string;
    
    @IsNumber()
    readonly year: number;
}