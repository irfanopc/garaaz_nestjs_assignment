import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { BrandSalesDaily } from 'src/brand-sales-daily/schemas/brand.sales';

@Injectable()
export class BrandSalesDailyService {
    constructor(
        @InjectModel(BrandSalesDaily.name)
        private BrandSalesDailyModel : mongoose.Model<BrandSalesDaily >
    ){}
    async getAll():Promise<BrandSalesDaily[]>{
        const brandSalesDailys = await this.BrandSalesDailyModel.find();
        return brandSalesDailys;
    }
    async Add(brandSalesDaily: BrandSalesDaily ):Promise<BrandSalesDaily>{
        const brandSalesDailys = await this.BrandSalesDailyModel.create(brandSalesDaily);
        return brandSalesDailys
    }
}
