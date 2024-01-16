import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type RoomiesDocument = Roomie & Document;

@Schema({
  toJSON: {
    getters: true,
    virtuals: true,
  },
  timestamps: true,
})
export class Roomie {
  @Prop({ required: true })
  name: string;
}

export const RoomiesSchema = SchemaFactory.createForClass(Roomie);

