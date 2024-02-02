import * as mongoose from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { v4 as uuid } from 'uuid';
import { Roomie } from './roomie.schema';

export type AssignmentDocument = Assignment & Document;

@Schema({
    toJSON: {
        getters: true,
        virtuals: true,
    },
    timestamps: true,
})
export class Assignment {

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Roomie' }) //Linking Assignment with Roomie
    roomie: Roomie;

}

export const AssignmentSchema = SchemaFactory.createForClass(Assignment);

