import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const databaseConfig = (configService: ConfigService): TypeOrmModuleOptions => ({
  type: 'postgres',
  host: configService.get<string>('DB_HOST', 'localhost'),
  port: configService.get<number>('DB_PORT', 5432),
  username: configService.get<string>('DB_USERNAME', 'shop_user'),
  password: configService.get<string>('DB_PASSWORD', 'shop_pass'),
  database: configService.get<string>('DB_NAME', 'shop_db'),
  entities: [__dirname + '/../**/*.entity{.ts,.js}'],
  synchronize: configService.get<string>('NODE_ENV', 'development') !== 'production',
  logging: configService.get<string>('NODE_ENV', 'development') === 'development',
});