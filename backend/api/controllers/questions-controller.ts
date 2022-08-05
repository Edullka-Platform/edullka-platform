import { NextFunction, Request, Response } from "express";
import { CreateQuestionsType } from "../entities/questions/questions-types";
import { CreateQuestionService } from "../services/questions-services";

export const createQuestionController = async (req: Request<{},{}, CreateQuestionsType>, res: Response, next: NextFunction) => {
  try {
    const newQuestion = await CreateQuestionService(req.body);
    // return tokens
    res.status(201).json(newQuestion);
  } catch (error: any) {
    throw new Error(error);
  }
}