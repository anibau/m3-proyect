import { AppDataSource } from "../Config/data-source";
import { Appointment } from "../Entities/Appointment";

export const appointRepository= AppDataSource.getRepository(Appointment).extend({
    findAppointById: async function(id:number):Promise<Appointment|null>{
        const appoint= await this.findOne({where:{id}, relations: { user:true}});
        if(!appoint){throw Error('invalid id')};
        return appoint
    }
});
