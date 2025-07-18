import { ApiProperty } from '@nestjs/swagger';

/**
 * Metadata for pagination information.
 * Contains details about the current page, total items, and navigation state.
 */
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

/**
 * Generic interface for paginated responses.
 * Can be used across different modules for consistent pagination structure.
 *
 * @template T - The type of data being paginated
 */
export interface PaginatedResponseDto<T> {
  data: T[];
  meta: PaginationMeta;
}
