import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { v4 as uuid } from 'uuid';
// import { User } from 'src/module/user/entities/user.entity';

export type UserDocument = User & Document;

@Schema({
  toJSON: {
    getters: true,
    virtuals: true,
  },
  timestamps: true,
})
export class User {
  @Prop({ required: true })
  username: string;

  @Prop({ required: true })
  passwd: string;
}

export const UserSchema = SchemaFactory.createForClass(User);

/* ClientSchema.virtual('Users', {
  ref: 'User',
  localField: 'clientId',
  foreignField: 'clientId',
  justOne: false,
}); */
