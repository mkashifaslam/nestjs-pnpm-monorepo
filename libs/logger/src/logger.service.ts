import { Injectable } from "@nestjs/common";

@Injectable()
export class LoggerService {
  greeting() {
    return "Hello World!";
  }
}
