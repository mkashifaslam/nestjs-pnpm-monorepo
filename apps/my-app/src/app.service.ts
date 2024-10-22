import { Injectable } from '@nestjs/common';
import { LoggerService } from '@app/logger';

@Injectable()
export class AppService {
  constructor(private logger: LoggerService) {}

  getHello(): string {
    return this.logger.greeting();
  }
}
