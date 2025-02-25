import { AppDataSource } from "../Config/data-source";
import { petRepository } from "../Repositories/petRepository";
import { userRepository } from "../Repositories/userRepository";
import { dtoPet } from "../Dto/dtoPets";

//FUNCION GET/PETS
export const userGetPetsService= async()=>{
    const pets= await petRepository.find();
    return pets
};
//FUNCION GET/PETS/:ID
export const userGetPetsByIdService= async(id: number)=>{
    const pet= await petRepository.findOne({where:{id}});
    if(!pet){throw Error()};
    return pet
};
//FUNCION  POST/PET
export const userPostPetService= async(data:dtoPet)=>{
    const queryRunner= AppDataSource.createQueryRunner();
    queryRunner.connect();
    try{
        queryRunner.startTransaction();
            const newPet= petRepository.create(data);
            await queryRunner.manager.save(newPet);
            //relacionar con id de usuario
            const user= await userRepository.findOneBy({
                "id": data.userId
            });
            if(!user){throw Error()};
            // newPet.user= user;
            // await queryRunner.manager.save(newPet);
            await queryRunner.commitTransaction(); 
            return newPet
    }catch(err){
        await queryRunner.rollbackTransaction();
        throw Error()
    } finally{ 
        console.log('Ha terminado el intento de creacion PETS')
        await queryRunner.release()
    }
}

