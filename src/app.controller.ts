import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AppService } from './app.service';
import { AuthService } from './auth/auth.service';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { LocalAuthGuard } from './auth/local-auth.guard';

@Controller()
@ApiTags('Autenticação/Autorização')
export class AppController {
  constructor(
    private readonly appService: AppService,
    private authService: AuthService,
  ) {}

  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  @ApiOperation({ summary: 'Autorização'})
  @ApiResponse({ status: 200, description: 'Autorizado com sucesso!'})
  async login(@Request() req) {
    return this.authService.login(req.user);
  }
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: 'Autenticação'})
  @ApiResponse({ status: 200, description: 'Autenticado com sucesso!'})
  @Get('perfil')
  getProfile(@Request() req) {
    return req.user;
  }
}
