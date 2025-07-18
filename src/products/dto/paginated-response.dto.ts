import { ApiProperty } from '@nestjs/swagger';

export class PaginationMeta {
  @ApiProperty({ description: 'Total de itens encontrados', example: 150 })
  total: number;

  @ApiProperty({ description: 'Página atual', example: 1 })
  page: number;

  @ApiProperty({ description: 'Itens por página', example: 10 })
  limit: number;

  @ApiProperty({ description: 'Total de páginas', example: 15 })
  totalPages: number;

  @ApiProperty({ description: 'Indica se existe próxima página', example: true })
  hasNextPage: boolean;

  @ApiProperty({ description: 'Indica se existe página anterior', example: false })
  hasPreviousPage: boolean;
}

export interface PaginatedResponseDto<T> {
  data: T[];
  meta: PaginationMeta;
}
