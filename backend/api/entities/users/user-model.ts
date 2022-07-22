import { model } from "mongoose";
import { UserSchema } from './user-schema';
import { IUser } from './user-types';

export const UserModel = model<IUser>('User', UserSchema);
