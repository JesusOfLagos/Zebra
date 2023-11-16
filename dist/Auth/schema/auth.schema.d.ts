import { Document } from '@nestjs/mongoose';
export declare enum UserType {
    SELLER = "seller",
    BUYER = "buyer"
}
export declare class User extends Document {
    name: string;
    password: string;
    email: string;
    type: string;
}
export declare const UserSchema: any;
