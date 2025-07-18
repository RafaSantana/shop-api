import { IsOptional, IsPositive, IsNumber, Min, Max, IsString, MinLength } from 'class-validator';
import { Type } from 'class-transformer';
import { ApiPropertyOptional } from '@nestjs/swagger';

/**
 * Data Transfer Object for searching products.
 * This class defines the structure and validation rules for product search requests.
 */
export class SearchProductsDto {
  @ApiPropertyOptional({
    description: 'Termo de busca para filtrar produtos por nome ou descrição',
    example: 'smartphone',
    minLength: 1,
  })
  @IsOptional()
  @IsString()
  @MinLength(1)
  search?: string;

  @ApiPropertyOptional({
    description: 'Número da página para paginação',
    example: 1,
    minimum: 1,
    default: 1,
  })
  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  @IsPositive()
  @Min(1)
  page?: number = 1;

  @ApiPropertyOptional({
    description: 'Quantidade de itens por página',
    example: 10,
    minimum: 1,
    maximum: 100,
    default: 10,
  })
  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  @IsPositive()
  @Min(1)
  @Max(100)
  limit?: number = 10;
}
