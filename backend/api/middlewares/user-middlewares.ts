import { NextFunction, Request, Response } from 'express';
import JWTService from '../services/jwt-services';

const authenticate = (req: Request, res: Response, next: NextFunction) => {
  try {
    res.send(JWTService.verify(req.body.token));
    next();
  } catch (error: any) {
    throw new Error(error);
  }
};

export default authenticate;