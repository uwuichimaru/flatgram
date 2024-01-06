import {Router, Response, Request} from 'express'
import { getAllUsers, editUserById, login, register, current } from '../controllers/users';
import { auth } from '../middleware/auth';

const router = Router();

router.post('/login', login);
router.post('/register', register);
router.get('/current', auth, current);
router.get('/', getAllUsers)
router.put('/:id', editUserById)

export {router as userRouter};