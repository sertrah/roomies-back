import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { v4 as uuid } from 'uuid';

export type BillDocument = Bill & Document;

@Schema({
    toJSON: {
        getters: true,
        virtuals: true,
    },
    timestamps: true,
})
export class Bill {
    @Prop({ required: true })
    name: string;
}

export const BillSchema = SchemaFactory.createForClass(Bill);
