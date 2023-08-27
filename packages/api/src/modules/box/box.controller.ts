import { Controller, Get } from '@nestjs/common';
import { BoxService } from './box.service';

@Controller('box')
export class BoxController {
  constructor(private readonly boxService: BoxService) {}

  @Get()
  getBoxes() {
    return this.boxService.getBoxes();
  }
}
