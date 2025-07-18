import { IsOptional, IsPositive, IsNumber, Min, Max, IsString, MinLength } from 'class-validator';
import { Type } from 'class-transformer';

/**
 * Data Transfer Object for searching products.
 * This class defines the structure and validation rules for product search requests.
 */
export class SearchProductsDto {
  @IsOptional()
  @IsString()
  @MinLength(1)
  search?: string;

  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  @IsPositive()
  @Min(1)
  page?: number = 1;

  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  @IsPositive()
  @Min(1)
  @Max(100)
  limit?: number = 10;
}
