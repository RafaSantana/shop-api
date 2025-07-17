import {
  IsString,
  IsNotEmpty,
  IsNumber,
  IsPositive,
  IsOptional,
  IsUrl,
  MaxLength,
} from 'class-validator';

/**
 * Data Transfer Object for creating a product.
 * This class defines the structure and validation rules for product creation requests.
 */
export class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(255)
  name: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsNumber({ maxDecimalPlaces: 2 })
  @IsPositive()
  price: number;

  @IsOptional()
  @IsString()
  @IsUrl()
  @MaxLength(500)
  image?: string;
}
