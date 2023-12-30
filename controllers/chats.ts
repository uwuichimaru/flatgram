import {Request, Response} from 'express'
const getAllChats = async (req:Request, res: Response) => {
    return res.json({message: "getAllChats"})
}

const createChat = async (req:Request, res: Response) => {
    return res.json({message: "createChat"})
}

const deleteChat = async (req:Request, res: Response) => {
    return res.json({message: "deleteChat"})
}

export {getAllChats, createChat, deleteChat}