import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BrandSalesDailyController } from './brand-sales-daily.controller';
import { BrandSalesDailyService } from './brand-sales-daily.service';
import { BrandSalesDaily, BrandSalesDailySchema } from './schemas/brand.sales';

@Module({
  imports: [MongooseModule.forFeature([{name: BrandSalesDaily.name, schema: BrandSalesDailySchema}])],
  controllers: [BrandSalesDailyController],
  providers: [BrandSalesDailyService]
})
export class BrandSalesDailyModule {}
