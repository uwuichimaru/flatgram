import {Router, Response, Request} from 'express'
import { editUserById, getUserById, login, register, current } from '../controllers/users';
import { auth } from '../middleware/auth';

const router = Router();

router.post('/login', login);
router.post('/register', register);
router.get('/current', auth, current);
router.get('/:id', getUserById)
router.post('/edit/:id', editUserById)

export {router as userRouter};