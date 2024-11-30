import { IsNumber, IsOptional, IsString, IsUUID } from "class-validator";

export class UpdateCarDto {
    
    @IsString()
    @IsOptional()
    readonly marca?: string;

    @IsString()
    @IsOptional()
    readonly modelo?: string;

    @IsNumber()
    @IsOptional()
    readonly year?: number;
}