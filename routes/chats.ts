import {Router} from 'express';
import { createChat, deleteChat, getAllChats } from '../controllers/chats';

const router = Router();

router.get('/', getAllChats); // Get All Chats
router.post('/', createChat) // Create new chat with someone
router.delete('/', deleteChat) // Delete chat

export {router as chatRouter}