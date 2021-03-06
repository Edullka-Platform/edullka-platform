import { Router } from "express";
import { createQuestionController } from "../controllers/questions-controller";
import { createUserController } from '../controllers/user-controller';



const routerApi = (app: any) => {
  const routerVersion: Router = Router();
  const router: Router = Router();
  
  app.use('/api', routerVersion);
  
  // ============ Version 1 ====================
  routerVersion.use('/v1', router);

    router.post('/user', createUserController);
    router.post('/question', createQuestionController);


  // ============ Version 2 ====================
  routerVersion.use('/v2', router);

    router.post('/user', createUserController);




}


// rutas generales

export default routerApi;
