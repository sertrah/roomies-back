import * as mongoose from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { v4 as uuid } from 'uuid';
import { House } from './house.schema';

export type BillDocument = Bill & Document;

@Schema({
    toJSON: {
        getters: true,
        virtuals: true,
    },
    timestamps: true,
})
export class Bill {
    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'House' }) //Linking assigment with house
    house: House;
}

export const BillSchema = SchemaFactory.createForClass(Bill);
