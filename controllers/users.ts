import { Request, Response } from "express"
import { prisma } from '../prisma/prisma-client'
import { genSalt, hash, compare } from 'bcrypt'
import { sign } from 'jsonwebtoken'

const login = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(401).json({ message: "Fill all of the blanks" })
        }
        const user = await prisma.user.findFirst({
            where: {
                email: email
            }
        })
        const isPasswordCorrect = user && (await compare(password, user.password));

        const secret = process.env.JWT_SECRET;

        if (user && isPasswordCorrect && secret) {
            return res.status(200).json({
                id: user.id,
                email: user.email,
                token: sign({ id: user.id }, secret, { expiresIn: '1h' })
            })
        }
    }
    catch (err) {
        return res.status(500).json({ message: "Fatal error" + err })
    }
}

const register = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) return res.status(401).json({ message: "Fill all of the blanks" });

        const isEmailExist = await prisma.user.findFirst({
            where: {
                email: email
            }
        })
        if (isEmailExist) return res.status(401).json({ message: "The user with similar email is already exist" });

        const salty = await genSalt(9);
        const hashedPassword = await hash(password, salty);

        const secret = process.env.JWT_SECRET;

        const user = await prisma.user.create({
            data: {
                email: email,
                password: hashedPassword,
            }
        })

        if (hashedPassword && secret && user) {
            return res.status(200).json({
                id: user.id,
                email: user.email,
                token: sign({ id: user.id }, secret, { expiresIn: '1h' })
            })
        }
    }
    catch (err) {
        return res.status(500).json({ message: "Fatal error" + err })
    }
}

const getUserById = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {

        const user = await prisma.user.findFirst({
            where: {
                id: parseInt(id)
            }
        })

        if (user) {
            return res.status(200).json({
                id: user.id,
                name: user.name,
                phoneNumber: user.phoneNumber,
                email: user.email,
                password: user.password,
                userName: user.userName,
                profilePicture: user.profilePicture,
                role: user.role,
                createdAt: user.createdAt,
                updatedAt: user.updatedAt,
            })
        }
        else {
            return res.status(404).json({
                message: "User wasn't found"
            })
        }
    }
    catch (err) {
        return res.status(500).json({ message: "Fatal error", err })
    }
}

const editUserById = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;

        const {name, userName, description, profilePicture} = req.body;

        await prisma.user.update({where:{id: parseInt(id)}, data: {
                name: name,
                userName: userName,
                description: description,
                profilePicture: profilePicture,
        }})
    }
    catch {
        return res.status(500).json({ message: "Fatal error" })
    }
}

export { login, register, getUserById, editUserById }