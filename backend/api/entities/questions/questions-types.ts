import { Types } from "mongoose";

export interface IQuestions {
  _id: Types.ObjectId;
  title: string;
  description: string;
  image: string;
  option1: string;
  option2: string;
  option3: string;
  option4: string;
  createdAt: Date;
  updatedAt: Date;
}

export type CreateQuestionsType = Omit<IQuestions, '_id' | 'createdAt' | 'updatedAt'>;
