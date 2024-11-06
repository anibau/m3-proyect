import { AppDataSource } from "../Config/data-source";
import { User } from "../Entities/User";

export const userRepository= AppDataSource.getRepository(User).extend({
    findById: async function(id:number):Promise<User|null>{
        const user= await this.findOne({where:{id}, relations: {appointments:true, credentials:true}});
        if(!user){throw Error('invalid id')};
        return user
    }
});
