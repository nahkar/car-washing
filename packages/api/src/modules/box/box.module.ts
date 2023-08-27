import { Module } from '@nestjs/common';
import { BoxController } from './box.controller';
import { BoxService } from './box.service';
import { PrismaService } from '../../prisma.service';

@Module({
  controllers: [BoxController],
  providers: [PrismaService, BoxService],
})
export class BoxModule {}
