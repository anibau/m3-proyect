import { Request, Response, NextFunction } from "express"
export const validateUser= (req:Request, res:Response, next: NextFunction):void=>{
    const {name, lastName, email, birthdate, nDni,telefono, username, password}=req.body;
    if(!name || !lastName || !email || !birthdate || !nDni ||!telefono|| !username || !password){
     res.status(400).json({error: 'datos incompletos'});
     return
    }
    next()
};

export const validateAppointment= (req: Request, res: Response, next:NextFunction):void=>{
     const {date, time, userId, status, pet, service}= req.body;
     if(!date || !time || !userId || !status || !pet || !service){
        res.status(400).json({error: 'datos incompletos'});
        return
     }
     next()
};
export const validatePet=(req:Request, res: Response, next: NextFunction):void=>{
    const {name, age, weight, raza, userId}=req.body;
    if(!name || !age || !weight || !raza || !userId){
        res.status(400).json({error: 'datos incompletos'});
        return
    }
    next()
};
export const validateCredential= (req: Request, res:Response, next:NextFunction):void=>{
    const {username, password}=req.body;
    if(!username ||!password){
        res.status(400).json({error:'datos incompletos'});
        return
    } next()
}