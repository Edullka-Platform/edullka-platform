import { Router } from 'express';
import { createQuestionController } from "../controllers/questions-controller";
import { signinUser, signupUser } from '../controllers/user-controller';
import authenticate from '../middlewares/user-middlewares';



  const routerApi: Router = Router();
  const routerVersion: Router = Router();
  const router: Router = Router();

  routerApi.use('/api', routerVersion);

    // ============ Version 1 ====================
    routerVersion.use('/v1', router);

      router.post('/signup', signupUser);
      router.post('/signin', signinUser);
      
      // Authenticated middleware test route
      router.post('/auth', authenticate, (res, req) => {
        return console.log('User authenticated');
      });
    router.post('/question', createQuestionController);


    // ============ Version 2 ====================
    routerVersion.use('/v2', router);

      // router.post('/user', signupUser);



// rutas generales

export default routerApi;