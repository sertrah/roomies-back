import * as mongoose from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { v4 as uuid } from 'uuid';
import { Assignment } from './assignment.schema';
import { Bill } from './bill.schema';


export type MovementDocument = Movement & Document;

@Schema({
    toJSON: {
        getters: true,
        virtuals: true,
    },
    timestamps: true,
})
export class Movement {
    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Assignment' }) //Linking assigment with house
    assignmentId: Assignment;
    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Bill' }) //Linking assigment with house
    billsId: Bill;
}

export const MovementSchema = SchemaFactory.createForClass(Movement);

