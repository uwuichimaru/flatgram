import {Router} from 'express'

const router = Router();

router.post('/login', async (req, res) => {});
router.post('/register', async(req, res) => {});
router.get('/users', async (req, res) => {})

export {router as userRouter};