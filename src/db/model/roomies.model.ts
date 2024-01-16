import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { v4 as uuid } from 'uuid';

export type RoomiesDocument = Roomies & Document;

@Schema({
  toJSON: {
    getters: true,
    virtuals: true,
  },
  timestamps: true,
})
export class Roomies {
  @Prop({ required: true })
  name: string;
}

export const RoomiesSchema = SchemaFactory.createForClass(Roomies);

