# 🛒 Shop API - Sistema de Gerenciamento de Produtos

<p align="center">
  <img src="https://nestjs.com/img/logo-small.svg" width="120" alt="NestJS Logo" />
  <img src="https://raw.githubusercontent.com/docker-library/docs/01c12653951b2fe592c1f93a13b4e289ada0e3a1/postgres/logo.png" width="120" alt="PostgreSQL Logo" />
</p>

<p align="center">
  <strong>API RESTful moderna para gerenciamento de produtos e carrinho de compras</strong>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/NestJS-11.0-red.svg" alt="NestJS Version" />
  <img src="https://img.shields.io/badge/TypeScript-5.7-blue.svg" alt="TypeScript Version" />
  <img src="https://img.shields.io/badge/PostgreSQL-15-blue.svg" alt="PostgreSQL Version" />
  <img src="https://img.shields.io/badge/Docker-Ready-2496ED.svg" alt="Docker Ready" />
  <img src="https://img.shields.io/badge/Swagger-Documented-85EA2D.svg" alt="Swagger Docs" />
</p>

---

## 📋 Índice

- [Sobre o Projeto](#-sobre-o-projeto)
- [Funcionalidades](#-funcionalidades)
- [Tecnologias](#-tecnologias)
- [Arquitetura](#-arquitetura)
- [Instalação](#-instalação)
- [Uso](#-uso)
- [API Endpoints](#-api-endpoints)
- [Docker](#-docker)
- [Estrutura do Projeto](#-estrutura-do-projeto)
- [Decisões Técnicas](#-decisões-técnicas)

---

## 🎯 Sobre o Projeto

A **Shop API** é uma solução completa para gerenciamento de produtos, desenvolvida como parte de um desafio técnico. O projeto demonstra a implementação de uma API RESTful moderna utilizando as melhores práticas de desenvolvimento com NestJS, TypeScript e PostgreSQL.

### Contexto do Desafio

Este projeto foi desenvolvido para atender aos seguintes requisitos:

- ✅ **Cadastro de Produtos** com validação robusta
- ✅ **API RESTful** com endpoints bem definidos
- ✅ **Banco de dados** PostgreSQL para persistência
- ✅ **Validação de dados** e tratamento de erros
- ✅ **Documentação** interativa com Swagger
- ✅ **Containerização** com Docker

---

## 🚀 Funcionalidades

### Core Features

- **CRUD Completo de Produtos**
  - Criar novos produtos
  - Listar todos os produtos
  - Buscar produto por ID
  - Atualizar produtos existentes
  - Remover produtos

### Funcionalidades Avançadas

- **🔍 Sistema de Busca Duplo**
  - Listagem completa: `GET /products`
  - Busca com filtros: `GET /products/search`
  - Paginação com metadados completos
  - Filtro por nome e descrição

- **📊 Validação Robusta**
  - Validação de entrada com `class-validator`
  - Transformação automática de tipos
  - Sanitização de dados de entrada
  - Documentação em português no Swagger

- **📚 Documentação Interativa**
  - Swagger UI disponível em `/api`
  - Documentação completa de todos os endpoints
  - Exemplos de requisições e respostas
  - Esquemas de validação detalhados

---

## 🛠 Tecnologias

### Backend

- **[NestJS 11](https://nestjs.com/)** - Framework Node.js progressivo
- **[TypeScript 5.7](https://www.typescriptlang.org/)** - Superset tipado do JavaScript
- **[PostgreSQL 15](https://www.postgresql.org/)** - Banco de dados relacional
- **[TypeORM 0.3](https://typeorm.io/)** - ORM para TypeScript/JavaScript

### Validação e Documentação

- **[Class Validator](https://github.com/typestack/class-validator)** - Validação declarativa
- **[Class Transformer](https://github.com/typestack/class-transformer)** - Transformação de objetos
- **[Swagger/OpenAPI](https://swagger.io/)** - Documentação automática da API

### DevOps e Infraestrutura

- **[Docker](https://www.docker.com/)** - Containerização
- **[Docker Compose](https://docs.docker.com/compose/)** - Orquestração de containers
- **Multi-stage Build** - Otimização de imagens Docker

---

## 🏗 Arquitetura

### Estratégia de Busca Dupla

O projeto implementa uma arquitetura inovadora com **dupla estratégia de busca** para atender diferentes cenários:

```typescript
// 1. Listagem Completa (Frontend Filtering)
GET /products
// Retorna todos os produtos para filtro no frontend

// 2. Busca com Paginação (Backend Filtering)
GET /products/search?search=smartphone&page=1&limit=10
// Busca otimizada no servidor com paginação
```

### Benefícios da Arquitetura

- **Performance**: Usuários podem escolher entre cache local ou busca em tempo real
- **Flexibilidade**: Frontend pode implementar filtros instantâneos
- **Escalabilidade**: Paginação evita sobrecarga em grandes datasets
- **UX**: Suporte a cenários de primeira visita sem parâmetros

---

## 📦 Instalação

### Pré-requisitos

- Node.js 22.17.0+
- Docker e Docker Compose
- Git

### 1. Clone o repositório

```bash
git clone https://github.com/RafaSantana/shop-api.git
cd shop-api
```

### 2. Instale as dependências

```bash
npm install
```

### 3. Configure as variáveis de ambiente

```bash
# Copie o arquivo de exemplo
cp .env-example .env

# Configure as variáveis conforme necessário
```

---

## 🔧 Uso

### Desenvolvimento Local

```bash
# Modo desenvolvimento com watch
npm run start:dev

# Modo debug
npm run start:debug
```

### Com Docker (Recomendado)

```bash
# Suba todos os serviços
docker-compose up --build

# Em modo detached (background)
docker-compose up --build -d

# Visualizar logs
docker-compose logs -f shop-api
```

### Scripts Disponíveis

```bash
# Desenvolvimento
npm run start:dev          # Modo watch
npm run start:debug        # Modo debug

# Produção
npm run build              # Build da aplicação
npm run start:prod         # Modo produção

# Docker
npm run docker:dev         # Docker em desenvolvimento
npm run docker:prod        # Docker em produção
npm run docker:down        # Parar containers
npm run docker:logs        # Ver logs

# Qualidade
npm run lint               # ESLint
npm run test               # Testes unitários
npm run test:e2e           # Testes E2E
```

---

## 📡 API Endpoints

### Informações da API

```http
GET /
```

Retorna informações básicas da API e endpoints disponíveis.

### Produtos

#### Listar todos os produtos

```http
GET /products
```

#### Buscar produtos com filtros

```http
GET /products/search?search=smartphone&page=1&limit=10
```

**Parâmetros:**

- `search` (opcional): Termo de busca
- `page` (opcional): Número da página (padrão: 1)
- `limit` (opcional): Itens por página (padrão: 10, máx: 100)

#### Buscar produto por ID

```http
GET /products/:id
```

#### Criar novo produto

```http
POST /products
Content-Type: application/json

{
  "name": "Smartphone Galaxy S23",
  "description": "Smartphone com 128GB de armazenamento",
  "price": 899.99,
  "image": "https://example.com/image.jpg"
}
```

#### Atualizar produto

```http
PATCH /products/:id
Content-Type: application/json

{
  "name": "Novo nome do produto",
  "price": 999.99
}
```

#### Remover produto

```http
DELETE /products/:id
```

### Documentação Interativa

Acesse a documentação completa em: **http://localhost:3000/api**

---

## 🐳 Docker

### Configuração Otimizada

O projeto utiliza **multi-stage build** para otimização:

```dockerfile
# Stage 1: Builder
FROM node:22.17.0-alpine AS builder
# Instala dependências e constrói a aplicação

# Stage 2: Production
FROM node:22.17.0-alpine AS production
# Imagem final otimizada apenas com runtime
```

### Serviços

```yaml
services:
  postgres: # PostgreSQL 15 com health check
  shop-api: # Aplicação NestJS containerizada
```

### Health Checks

- **PostgreSQL**: `pg_isready` para verificar disponibilidade
- **NestJS**: Verificação HTTP na porta 3000
- **Dependências**: App só inicia após DB estar saudável

---

## 📁 Estrutura do Projeto

```
shop-api/
├── src/
│   ├── common/
│   │   ├── dto/
│   │   │   └── paginated-response.dto.ts  # DTOs compartilhados
│   │   └── index.ts                # Barrel exports
│   ├── config/
│   │   └── database.config.ts      # Configuração do banco
│   ├── products/
│   │   ├── dto/
│   │   │   ├── create-product.dto.ts
│   │   │   ├── update-product.dto.ts
│   │   │   └── search-products.dto.ts
│   │   ├── entities/
│   │   │   └── product.entity.ts   # Entidade do produto
│   │   ├── products.controller.ts  # Endpoints REST
│   │   ├── products.service.ts     # Lógica de negócio
│   │   └── products.module.ts      # Módulo do NestJS
│   ├── app.controller.ts           # Controller raiz
│   ├── app.service.ts              # Service raiz
│   ├── app.module.ts               # Módulo principal
│   └── main.ts                     # Bootstrap da aplicação
├── docker-compose.yml              # Orquestração
├── Dockerfile                      # Imagem da aplicação
├── .dockerignore                   # Exclusões do Docker
└── README.md                       # Esta documentação
```

---

## 🧠 Decisões Técnicas

### 1. Arquitetura de Busca Dupla

**Contexto:** O desafio incluía requisitos de listagem e busca no backend, além de filtro e paginação no frontend.

**Solução:** Implementamos uma estratégia dupla para atender ambos os cenários:

- `GET /products`: Listagem completa para filtros no frontend
- `GET /products/search`: Busca otimizada no servidor com paginação

**Benefícios:**

- Flexibilidade para diferentes padrões de UX
- Performance otimizada em ambos os cenários
- Suporte a datasets grandes e pequenos

### 2. Validação com Class-Validator

**Escolha:** Usamos decorators para validação declarativa.

```typescript
@IsString()
@IsNotEmpty()
@MaxLength(255)
name: string;
```

**Benefícios:**

- Código mais limpo e legível
- Validação automática pelo NestJS
- Documentação automática no Swagger

### 3. PostgreSQL com TypeORM

**Escolha:** PostgreSQL como banco principal com TypeORM.

**Justificativas:**

- Robustez para dados relacionais
- Excelente performance com índices
- Suporte nativo a `ILIKE` para busca case-insensitive
- TypeORM oferece type-safety completo

### 4. Docker Multi-stage

**Problema:** Imagens Docker grandes em produção.

**Solução:** Build em duas etapas:

1. **Builder**: Instala tudo e compila
2. **Production**: Apenas runtime necessário

**Resultado:** Imagem final otimizada e segura.

### 5. Swagger para Documentação

**Escolha:** Documentação automática com decorators.

**Benefícios:**

- Sempre sincronizada com o código
- Interface interativa para testes
- Onboarding facilitado para novos desenvolvedores

### 6. Estrutura Common para Componentes Reutilizáveis

**Decisão:** Pasta `src/common/` para DTOs e utilitários compartilhados.

**Exemplo:** `PaginatedResponseDto` - componente genérico que pode ser usado por múltiplos módulos.

**Benefícios:**

- Evita duplicação de código
- Facilita manutenção e evolução
- Padronização across modules
- Barrel exports para imports limpos

**Estrutura:**

```typescript
// src/common/index.ts - Barrel export
export * from './dto/paginated-response.dto';

// Uso nos módulos
import { PaginatedResponseDto } from '../common';
```

---

## 👨‍💻 Desenvolvimento

**Desenvolvido por:** Rafael Santana  
**Data:** Julho 2025  
**Contexto:** Desafio Técnico - Sistema de Produtos

---

<p align="center">
  <strong>🚀 Projeto desenvolvido com foco em qualidade, performance e boas práticas!</strong>
</p>
