import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
  Query,
} from '@nestjs/common';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiParam,
  ApiQuery,
  ApiBadRequestResponse,
  ApiNotFoundResponse,
} from '@nestjs/swagger';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';
import { SearchProductsDto } from './dto/search-products.dto';
import { PaginatedResponseDto } from '../common';

@ApiTags('products')
@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  @ApiOperation({ summary: 'Criar um novo produto' })
  @ApiResponse({
    status: 201,
    description: 'Produto criado com sucesso',
    type: Product,
  })
  @ApiBadRequestResponse({ description: 'Dados inválidos fornecidos' })
  create(@Body() createProductDto: CreateProductDto): Promise<Product> {
    return this.productsService.create(createProductDto);
  }

  @Get()
  @ApiOperation({ summary: 'Listar todos os produtos' })
  @ApiResponse({
    status: 200,
    description: 'Lista de todos os produtos',
    type: [Product],
  })
  findAll(): Promise<Product[]> {
    return this.productsService.findAll();
  }

  @Get('search')
  @ApiOperation({
    summary: 'Buscar produtos com filtros e paginação',
    description:
      'Permite buscar produtos por nome/descrição com suporte a paginação. Se nenhum termo de busca for fornecido, retorna todos os produtos paginados.',
  })
  @ApiQuery({
    name: 'search',
    required: false,
    description: 'Termo de busca para filtrar por nome ou descrição',
    example: 'smartphone',
  })
  @ApiQuery({
    name: 'page',
    required: false,
    description: 'Número da página',
    example: 1,
  })
  @ApiQuery({
    name: 'limit',
    required: false,
    description: 'Itens por página (máximo 100)',
    example: 10,
  })
  @ApiResponse({
    status: 200,
    description: 'Produtos encontrados com metadados de paginação',
  })
  @ApiBadRequestResponse({ description: 'Parâmetros de busca inválidos' })
  searchProducts(@Query() searchDto: SearchProductsDto): Promise<PaginatedResponseDto<Product>> {
    return this.productsService.searchProducts(searchDto);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Buscar produto por ID' })
  @ApiParam({
    name: 'id',
    description: 'ID único do produto',
    example: 1,
  })
  @ApiResponse({
    status: 200,
    description: 'Produto encontrado',
    type: Product,
  })
  @ApiNotFoundResponse({ description: 'Produto não encontrado' })
  @ApiBadRequestResponse({ description: 'ID inválido fornecido' })
  findOne(@Param('id', ParseIntPipe) id: number): Promise<Product> {
    return this.productsService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Atualizar produto' })
  @ApiParam({
    name: 'id',
    description: 'ID único do produto',
    example: 1,
  })
  @ApiResponse({
    status: 200,
    description: 'Produto atualizado com sucesso',
    type: Product,
  })
  @ApiNotFoundResponse({ description: 'Produto não encontrado' })
  @ApiBadRequestResponse({ description: 'Dados inválidos fornecidos' })
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateProductDto: UpdateProductDto,
  ): Promise<Product> {
    return this.productsService.update(id, updateProductDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Remover produto' })
  @ApiParam({
    name: 'id',
    description: 'ID único do produto',
    example: 1,
  })
  @ApiResponse({
    status: 200,
    description: 'Produto removido com sucesso',
  })
  @ApiNotFoundResponse({ description: 'Produto não encontrado' })
  @ApiBadRequestResponse({ description: 'ID inválido fornecido' })
  remove(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return this.productsService.remove(id);
  }
}
