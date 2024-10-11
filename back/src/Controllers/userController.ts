import { NextFunction, Request, Response } from "express";
import { checkCredentialServ, getCredentialService } from "../Services/credentialService";
import { getAllUsersService, getUserByIdService, postCreateUserService } from "../Services/userServices";
//USERS
export const userGetallController= async(req: Request, res: Response, next:NextFunction)=>{
    try{
        const users= await getAllUsersService();
        res.status(201).json(users)
    }catch(err){res.status(404).send(`error al encontrar la lista de usuarios. ${err}`)}
};
//! GET /user/:id
export const userGetbyIdController= async(req: Request, res: Response)=>{
    try{
        const {id}=req.params;
        const idUser= await getUserByIdService(Number(id));
        res.status(200).json(idUser)
    } catch(err){res.status(404).send(`Usuario no econtrado por Id. ${err}`)}
};
//! POST /user/register
export const postCreateUserController= async(req:Request, res: Response)=>{
    try{
        const newUser= await postCreateUserService(req.body);
        res.status(201).json(newUser)
    }catch(err){res.status(400).send(`Error al crear Usuario. ${err}`)}
    
};
//CREDENCIALES
//! POST /users/login
export const checkPostRegisController= async(req: Request, res:Response)=>{
    try{
        const checkUser= await checkCredentialServ(req.body);
        res.status(200).json(checkUser)
    }catch(err){
        res.status(400).send('Datos incorrectos. Inicio de sesion fallida')
    }
};
  //extra controller
export const getCredentialController= async(req: Request, res: Response)=>{
    try{
        const credent= await getCredentialService();
        res.status(201).json(credent)
    }catch(err){
        res.status(400).send('Error al obtener lista de credenciales')
    }
}

