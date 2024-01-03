import {Router} from 'express'
import { editUserById, getUserById, login, register } from '../controllers/users';

const router = Router();

router.post('/login', login);
router.post('/register', register);
router.get('/:id', getUserById)
router.post('/edit/:id', editUserById)

export {router as userRouter};