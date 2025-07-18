import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): object {
    return {
      message: 'Shop API - Sistema de Gerenciamento de Produtos',
      version: '1.0.0',
      status: 'online',
      endpoints: {
        products: '/products',
        search: '/products/search',
        swagger: '/api',
      },
      timestamp: new Date().toISOString(),
    };
  }
}
