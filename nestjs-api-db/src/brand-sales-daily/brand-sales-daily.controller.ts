import { Controller ,Get,Post,Body} from '@nestjs/common';
import { BrandSalesDaily } from 'src/brand-sales-daily/schemas/brand.sales';
import { BrandSalesDailyService } from './brand-sales-daily.service';

@Controller('BrandSalesDaily')
export class BrandSalesDailyController {
    constructor(private BrandSalesDailyService:BrandSalesDailyService){}
    @Get()
    async getAll() :Promise<BrandSalesDaily[]> {
        return this.BrandSalesDailyService.getAll()
    }
    @Post ()
    
    async Add(
        @Body ()
       brandSalesDaily: BrandSalesDaily

    ) : Promise<BrandSalesDaily> {
        return this.BrandSalesDailyService.Add(brandSalesDaily)


    }
}
