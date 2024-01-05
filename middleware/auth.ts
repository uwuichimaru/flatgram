import { NextFunction, Request, Response } from "express";

const jwt = require('jsonwebtoken')
import {prisma} from '../prisma/prisma-client'
import { User } from "@prisma/client";

declare global {
    namespace Express {
      interface Request {
        user: User;
      }
    }
  }

const auth = async (req:Request, res:Response, next:NextFunction) => {
  try {
    let token = req.headers.authorization?.split(" ")[1];

    const decoded = jwt.verify(token, process.env.JWT_SECRET!);

    const user = await prisma.user.findUnique({
      where: {
        id: decoded.id,
      },
    });
    
    if (user) {
        req.user = user;
        next();
      } else {
        res.status(401).json({ message: 'Не авторизован' });
      }

    next();
  } catch (error) {
    res.status(401).json({ message: 'Не авторизован' });
  }
};

export {
  auth,
};
