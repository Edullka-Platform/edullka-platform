import { Types } from "mongoose";

export interface IUser {
  _id: Types.ObjectId;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  image: string;
  role: string;
  createdAt: Date;
  updatedAt: Date;
}

export type CreateUserType = Omit<IUser, '_id' | 'image' | 'createdAt' | 'updatedAt'>;
