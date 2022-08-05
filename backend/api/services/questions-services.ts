import { QuestionModel } from "../entities/questions/questions-model";
import { CreateQuestionsType } from "../entities/questions/questions-types";

export const CreateQuestionService = async (question: CreateQuestionsType) => {
  try {
    const newQuestion = new QuestionModel(question);
    return await newQuestion.save();
  } catch (error: any) {
    throw new Error(error);
  }
}