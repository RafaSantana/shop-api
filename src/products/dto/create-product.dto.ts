import {
  IsString,
  IsNotEmpty,
  IsNumber,
  IsPositive,
  IsOptional,
  IsUrl,
  MaxLength,
} from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

/**
 * Data Transfer Object for creating a product.
 * This class defines the structure and validation rules for product creation requests.
 */
export class CreateProductDto {
  @ApiProperty({
    description: 'Nome do produto',
    example: 'Smartphone Galaxy S23',
    maxLength: 255,
  })
  @IsString()
  @IsNotEmpty()
  @MaxLength(255)
  name: string;

  @ApiProperty({
    description: 'Descrição detalhada do produto',
    example: 'Smartphone com 128GB de armazenamento, câmera tripla e tela AMOLED',
  })
  @IsString()
  @IsNotEmpty()
  description: string;

  @ApiProperty({
    description: 'Preço do produto em reais',
    example: 899.99,
    minimum: 0.01,
  })
  @IsNumber({ maxDecimalPlaces: 2 })
  @IsPositive()
  price: number;

  @ApiPropertyOptional({
    description: 'URL da imagem do produto',
    example: 'https://example.com/images/smartphone.jpg',
    maxLength: 500,
  })
  @IsOptional()
  @IsString()
  @IsUrl()
  @MaxLength(500)
  image?: string;
}
