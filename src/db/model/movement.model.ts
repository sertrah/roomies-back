import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { v4 as uuid } from 'uuid';

export type MovementDocument = Movement & Document;

@Schema({
    toJSON: {
        getters: true,
        virtuals: true,
    },
    timestamps: true,
})
export class Movement {
    @Prop({ required: true })
    name: string;

    @Prop({
        required: true,
        unique: true,
        default: function genUUID() {
            return uuid();
        },
    })
    clientId: string;
}

export const MovementSchema = SchemaFactory.createForClass(Movement);

