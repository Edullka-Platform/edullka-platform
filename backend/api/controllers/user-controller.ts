import { NextFunction, Request, Response } from "express";
import { CreateUserType } from '../entities/users/user-types';
import { createUserService } from '../services/user-services';

export const createUserController = async (req: Request<{}, {}, CreateUserType>, res: Response, next: NextFunction) => {
  try {
    const newUser = await createUserService(req.body);
    // return tokens
    res.status(201).json(newUser);
  } catch (error: any) {
    throw new Error(error);
  }
}
