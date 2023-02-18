import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema({
    timestamps:true
})
export class BrandSalesDaily extends Document {

    @Prop()
    price:Number;
    @Prop()
    date: Date;
    @Prop()
    brand: String;
    @Prop()
    transactionType: String;
    @Prop()
    totalOrders: Number;
    @Prop()
    totalOrderValue: Number;
    @Prop()
    grossMarginPercentage: Number;
}

export const BrandSalesDailySchema = SchemaFactory.createForClass(BrandSalesDaily);


