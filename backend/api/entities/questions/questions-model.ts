import { model } from "mongoose";
import { QuestionSchema } from "./questions-schema";
import { IQuestions } from "./questions-types";

export const QuestionModel = model<IQuestions>('Question', QuestionSchema);