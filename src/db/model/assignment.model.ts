import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { v4 as uuid } from 'uuid';

export type AssignmentDocument = Assignment & Document;

@Schema({
    toJSON: {
        getters: true,
        virtuals: true,
    },
    timestamps: true,
})
export class Assignment {

}

export const AssignmentSchema = SchemaFactory.createForClass(Assignment);

