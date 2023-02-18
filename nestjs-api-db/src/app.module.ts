import { Module } from '@nestjs/common';

import { AppService } from './app.service';
import { BrandSalesDailyModule } from './brand-sales-daily/brand-sales-daily.module';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';


@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath:'.env',
      isGlobal:true
    }),
    MongooseModule.forRoot(process.env.DB_URI),
    BrandSalesDailyModule
  ],
  controllers: [],
  providers: [AppService],
})
export class AppModule {}
