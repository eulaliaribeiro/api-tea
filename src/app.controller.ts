import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AppService } from './app.service';
import { AuthService } from './auth/auth.service';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { LocalAuthGuard } from './auth/local-auth.guard';
import { IndexAuthSwagger } from './swagger/index-auth.swagger';
import { IndexJwtSwagger } from './swagger/index-jwt.swagger';
import { Public } from './auth/skip-auth';

@Controller()
@ApiTags('Autenticação/Autorização')
export class AppController {
  constructor(
    private readonly appService: AppService,
    private authService: AuthService,
  ) {}

  @Public()  
  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  @ApiOperation({ summary: 'Login de usuário'})
  @ApiResponse({ status: 200, description: 'Login feito com sucesso!', type: IndexAuthSwagger})
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: 'Validação do usuário'})
  @ApiResponse({ status: 200, description: 'Validado com sucesso!', type: IndexJwtSwagger})
  @Get('perfil')
  getProfile(@Request() req) {
    return req.user;
  }
  
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
