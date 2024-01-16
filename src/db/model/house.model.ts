import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { v4 as uuid } from 'uuid';

export type HouseDocument = House & Document;

@Schema({
    toJSON: {
        getters: true,
        virtuals: true,
    },
    timestamps: true,
})
export class House {
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

export const HouseSchema = SchemaFactory.createForClass(House);

