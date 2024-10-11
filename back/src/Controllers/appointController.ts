import { Request, Response } from "express"
import { getAllTurnService, getTurnByIdService, postTurnService, putCancelTurnService } from "../Services/appointService"

//! GET /turns
export const getTurnAllController= async(req: Request, res: Response)=>{
    try{
        const turns= await getAllTurnService();
        res.status(201).json(turns)
    }catch(err){res.status(400).send(`Error al obtener turnos. ${err}`)}
};
//! POST /turns/:id
export const getTurnbyIdController= async(req: Request, res: Response)=>{
    try{
        const {id}=req.params;
        const turn= await getTurnByIdService(Number(id));
        res.status(200).json(turn)
    }catch(err){res.status(404).send(`Turno no encontrado. ${err}`)}
};
//! POST /turns/schedule
export const postTurnController= async(req: Request, res: Response)=>{
    try{
        const createTurn= await postTurnService(req.body);
        res.status(201).json(createTurn)
    }catch(err){res.status(400).send('UserId inexistente. No se ha podido crear el turno')}
};
//! PUT /turns/cancel/:id
export const putCancelController= async(req: Request, res: Response)=>{
    try{
        const {id}= req.params;
        let turnCancel= await putCancelTurnService(Number(id));
        res.status(200).json(turnCancel)
    }catch(err){res.status(404).send(`Turno no encontrado. Error al cancelar`)}
}