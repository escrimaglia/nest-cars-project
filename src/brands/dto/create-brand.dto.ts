import { IsString, isString, MinLength } from "class-validator";

export class CreateBrandDto {
    @IsString()
    @MinLength(3)
    readonly name: string;
}
