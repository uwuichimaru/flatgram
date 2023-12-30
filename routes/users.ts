import {Router} from 'express'
import { getUserById, login, register } from '../controllers/users';

const router = Router();

router.post('/login', login);
router.post('/register', register);
router.get('/:id', getUserById)

export {router as userRouter};