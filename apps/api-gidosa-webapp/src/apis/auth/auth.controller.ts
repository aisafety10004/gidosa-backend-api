import { Body, Controller, Post, Get } from '@nestjs/common';

@Controller('auth')
export class AuthController {
  constructor() {}

  @Post()
  async login(@Body() loginStr: string) {
    return 'This action login';
  }
}
