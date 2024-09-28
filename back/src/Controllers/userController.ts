import { Request, Response } from "express";

export const userGetallController= async(req: Request, res: Response)=>{
    res.status(201).send('obtiendo con exito todos los usuarios');
    console.log('funcion exitosa')
}

export const userGetbyIdController= async(req: Request, res: Response)=>{
    res.status(201).send('obteniendo un usuario por ID')
}
export const userPostRegisterController= async(req:Request, res: Response)=>{
    res.status(201).send('Usuario creado correctamente')
}