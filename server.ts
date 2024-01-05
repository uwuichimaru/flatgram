import express from 'express';
import cors from 'cors';
import {config} from 'dotenv'
import { userRouter } from './routes/users';
import { chatRouter } from './routes/chats';
import morgan from 'morgan'


config();
const app = express();
const PORT = process.env.PORT!;

app.use(morgan("dev"))
app.use(express.json());
app.use(cors({origin: "*"}));
app.use(express.urlencoded({extended: true}));

app.use('/api/users', userRouter);
app.use('/api/chats', chatRouter)

app.listen(PORT || 5173, () =>
    console.log(`Server is running on the port = ${PORT || 5173}`))