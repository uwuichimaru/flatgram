import { Request, Response } from "express"

const login = async (req:Request, res:Response) => {
    return res.json({message: 'login'});
}

const register = async (req:Request, res: Response) => {
    return res.json({message: "register"})
}

const getUserById = async (req: Request, res: Response) => {
    return res.json({message: "getUserById"})
}

export {login, register, getUserById}