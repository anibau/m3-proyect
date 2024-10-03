import { Request, Response } from "express"
import { getAllTurnService, getTurnByIdService, postTurnService, putCancelTurnService } from "../Services/appointService"

export const getTurnAllController= async(req: Request, res: Response)=>{
    const turns= await getAllTurnService();
    res.status(201).json(turns)
}
export const getTurnbyIdController= async(req: Request, res: Response)=>{
    const {id}=req.params;
    const turn= await getTurnByIdService(Number(id));
    res.status(201).json(turn)
}
export const postTurnController= async(req: Request, res: Response)=>{
    const createTurn= await postTurnService(req.body);
    res.status(201).json(createTurn)
}
export const putCancelController= async(req: Request, res: Response)=>{
    const {id}= req.params;
    let turnCancel= await putCancelTurnService(Number(id));
    res.status(201).json(turnCancel)
}