import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): HelloObject {
    return {message: 'Hello World!'};
  }
}

export class HelloObject {
  message: string;
}
