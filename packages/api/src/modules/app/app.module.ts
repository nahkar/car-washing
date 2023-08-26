import { Module } from '@nestjs/common';
import { CompanyModule } from '../company/company.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `.env.${process.env.NODE_ENV}`,
    }),
    CompanyModule,
  ],
  controllers: [],
})
export class AppModule {}
