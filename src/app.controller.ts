import { Controller, Get } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { AppService } from './app.service';

@ApiTags('root')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @ApiOperation({
    summary: 'Informações da API',
    description: 'Retorna informações básicas sobre a Shop API e endpoints disponíveis',
  })
  @ApiResponse({
    status: 200,
    description: 'Informações da API retornadas com sucesso',
    schema: {
      type: 'object',
      properties: {
        message: { type: 'string', example: 'Shop API - Sistema de Gerenciamento de Produtos' },
        version: { type: 'string', example: '1.0.0' },
        status: { type: 'string', example: 'online' },
        endpoints: {
          type: 'object',
          properties: {
            products: { type: 'string', example: '/products' },
            search: { type: 'string', example: '/products/search' },
            swagger: { type: 'string', example: '/api' },
          },
        },
        timestamp: { type: 'string', example: '2025-07-18T12:00:00.000Z' },
      },
    },
  })
  getHello(): object {
    return this.appService.getHello();
  }
}
