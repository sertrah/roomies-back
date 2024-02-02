import * as mongoose from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { v4 as uuid } from 'uuid';
import { Assignment } from './assignment.schema';

export type HouseDocument = House & Document;

@Schema({
    toJSON: {
        getters: true,
        virtuals: true,
    },
    timestamps: true,
})
export class House {

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Assignment' }) //Linking assigment with house
    assignment: Assignment;

}

export const HouseSchema = SchemaFactory.createForClass(House);

