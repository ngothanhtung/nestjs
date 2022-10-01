import { Controller, Get, Req } from '@nestjs/common';
import { Request } from 'express';

@Controller('products')
export class ProductsController {
  @Get('/')
  findAll(@Req() request: Request): string {
    return 'This action returns all products';
  }
}
