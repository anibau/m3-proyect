import { Response, Request } from "express";
import { userGetPetsByIdService, userGetPetsService, userPostPetService } from "../Services/petsService";
import { catchAsync } from "../Utils/manageError";
//funcion para obtener los pets
export const userGetPetsController= catchAsync(async(req: Request, res: Response)=>{
    const pets= await userGetPetsService();
    res.status(201).json(pets)
});
//funcion para obtener por ID
export const userGetPetsByIDController= catchAsync(async(req:Request, res: Response)=>{
    const {id}= req.params;
    const petById= await userGetPetsByIdService(Number(id));
    res.status(201).json(petById)
});
//funcion para crear un pet
export const userPostPetController= catchAsync(async(req: Request, res: Response)=>{
    const newPet= await userPostPetService(req.body);
    res.status(201).json(newPet)
})
