import { Types } from "mongoose";

export interface IInscribed {
  _id: Types.ObjectId;
  title: string;
  platform: string;
  createdAt: Date;
  updatedAt: Date;
}

export type CreateInscribedType = Omit<IInscribed, '_id' | 'createdAt' | 'updatedAt'>