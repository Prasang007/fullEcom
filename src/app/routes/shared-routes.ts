import { Router } from 'express';
import sharedController from '../controllers/shared-controller';

const router = Router();
router.get('/signup', sharedController.checkEmail);
router.post('/signup', sharedController.signup);
router.post('/signupWithEmail', sharedController.signupWithEmail);
router.post('/login', sharedController.login);
export default router;
