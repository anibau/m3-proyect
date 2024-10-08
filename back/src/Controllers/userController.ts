import { NextFunction, Request, Response } from "express";
import { checkCredentialServ, createCredentialServ, getCredentialService } from "../Services/credentialService";
import { getAllUsersService, getUserByIdService, postCreateUserService } from "../Services/userServices";
import { catchAsync } from "../Utils/manageError";
//USERS
export const userGetallController= catchAsync(async(req: Request, res: Response, next:NextFunction)=>{
    const users= await getAllUsersService();
    res.status(201).json(users)
});

export const userGetbyIdController= catchAsync(async(req: Request, res: Response)=>{
    const {id}=req.params;
        const idUser= await getUserByIdService(Number(id));
        res.status(201).json(idUser)
});
export const postCreateUserController= catchAsync(async(req:Request, res: Response)=>{
    const newUser= await postCreateUserService(req.body);
    res.status(201).json(newUser)
    
});
//CREDENCIALES
export const credentialPostRegisterController= catchAsync(async(req:Request, res: Response)=>{
    const newCRED= await createCredentialServ(req.body)
    res.status(201).json(newCRED)
});
export const checkPostRegisController= catchAsync(async(req: Request, res:Response)=>{
    const checkUser= await checkCredentialServ(req.body);
    res.status(200).json(checkUser)
});
  //extra controller
export const getCredentialController= catchAsync(async(req: Request, res: Response)=>{
    const credent= await getCredentialService();
    res.status(201).json(credent)
} )

