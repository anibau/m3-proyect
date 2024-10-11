import { Response, Request } from "express";
import { userGetPetsByIdService, userGetPetsService, userPostPetService } from "../Services/petsService";
//funcion para GET/PETS
export const userGetPetsController= async(req: Request, res: Response)=>{
    try{
        const pets= await userGetPetsService();
        res.status(200).json(pets)
    }catch(err){
        res.status(400).send('error al encontrar la lista de pets.')
    }
};
//funcion para GET/PETS/:ID
export const userGetPetsByIDController= async(req:Request, res: Response)=>{
    try{
        const {id}= req.params;
        const petById= await userGetPetsByIdService(Number(id));
        res.status(200).json(petById)
    }catch(err){res.status(404).send('error al encontrar PET por Id.')}
};
//funcion para POST/PETS
export const userPostPetController= async(req: Request, res: Response)=>{
    try{
        const newPet= await userPostPetService(req.body);
        res.status(201).json(newPet)
    }catch(err){res.status(404).send('error al crear PET')}
}
