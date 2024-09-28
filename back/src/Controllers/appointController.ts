import { Request, Response } from "express"

export const getTurnAllController= async(req: Request, res: Response)=>{
    res.status(201).send('obteniendo todas las reservas disponibles')
}
export const getTurnbyIdController= async(req: Request, res: Response)=>{
    res.status(201).send('obteniendo una reserva por su ID')
}
export const postTurnController= async(req: Request, res: Response)=>{
    res.status(201).send('CREANDO una reserva con exito')
}
export const putCancelController= async(req: Request, res: Response)=>{
    res.status(201).send('CANCELANDO reserva con exito')
}