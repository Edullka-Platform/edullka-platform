import dotenv from 'dotenv';
import express, { Application, NextFunction, Request, Response } from 'express';
import routerApi from './routes/index';

dotenv.config();

const app: Application = express();

app.use(express.json());

app.use(routerApi);

app.use(function (error: any, req: Request, res: Response, next: NextFunction) {
  res.status(error.status ? error.status : 500).send({ error: error.message, type: error.type });
});

export default app;
