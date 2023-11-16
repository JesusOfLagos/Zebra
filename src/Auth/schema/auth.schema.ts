import { Prop, Schema, SchemaFactory, Document } from '@nestjs/mongoose';

export enum UserType {
  SELLER = 'seller',
  BUYER = 'buyer',
}

@Schema()
export class User extends Document {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  password: string;

  @Prop()
  email: string;

  @Prop({
    enum: [
      UserType.BUYER,
      UserType.SELLER
    ],
  })
  type: string;
}

export const UserSchema = SchemaFactory.createForClass(User);

