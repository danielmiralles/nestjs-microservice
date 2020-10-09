import { Controller, Get } from '@nestjs/common';
import { AppService, HelloObject } from './app.service';

@Controller('hello')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): HelloObject {
    return this.appService.getHello();
    //return JSON.stringify(this.appService.getHello());
  }
}
