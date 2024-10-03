import { Request, Response } from "express";
import { checkCredentialServ, createCredentialServ, getCredentialService } from "../Services/credentialService";
import { getAllUsersService, getUserByIdService, postCreateUserService } from "../Services/userServices";
//USERS
export const userGetallController= async(req: Request, res: Response)=>{
    const users= await getAllUsersService();
    res.status(201).json(users);
}

export const userGetbyIdController= async(req: Request, res: Response)=>{
    const {id}=req.params;
    const idUser= await getUserByIdService(Number(id));
    res.status(201).json(idUser)
}
export const postCreateUserController= async(req:Request, res: Response)=>{
    const newUser= await postCreateUserService(req.body);
    res.status(201).json(newUser)
}
//CREDENCIALES
export const credentialPostRegisterController= async(req:Request, res: Response)=>{
    const {username, password}= req.body;
    const newCRED= await createCredentialServ({username, password})
    res.status(201).json(newCRED)
}
export const checkPostRegisController=async(req: Request, res:Response)=>{
    const checkUser= await checkCredentialServ(req.body);
    res.status(200).json(checkUser)
}
  //extra controller
export const getCredentialController= async(req: Request, res: Response)=>{
    const credent= await getCredentialService();
    res.status(201).json(credent)
}  