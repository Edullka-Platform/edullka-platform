import { Router } from "express";
import { createUserController } from '../controllers/user-controller';

const router: Router = Router();

// rutas generales

router.post('/api/user', createUserController);

export default router;
