import { petModel, userModel } from "../Config/data-source";
import { dtoPet } from "../Dto/dtoPets";

export const userGetPetsService= async()=>{
    const pets= await petModel.find({
        relations:{
            user: true
        }
    });
    return pets
};
export const userGetPetsByIdService= async(id: number)=>{
    const pet= await petModel.findOneBy({id});
    return pet
};
export const userPostPetService= async(data:dtoPet)=>{
    const newPet= await petModel.create(data);
    const result= await petModel.save(newPet);
    //relacionar con id de usuario
    const user= await userModel.findOneBy({
        "id": data.userId
    });
    if(user){
        newPet.user= user;
        await petModel.save(newPet)
    }
    return newPet
}

