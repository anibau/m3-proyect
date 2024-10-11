import { dtoAppointment } from "../Dto/dtoAppointment";
import { Appointment } from "../Entities/Appointment";
import { appointRepository } from "../Repositories/appointRepository";
import { userRepository } from "../Repositories/userRepository";
import { AppDataSource } from "../Config/data-source";

// let appointments: IAppointment[]= [];
// let turn1={
//     id: 1,
//     date: '01/10',
//     time: '10 am',
//     userId: 1,
//     status:'active'
// };
// appointments.push(turn1);
// !Implementar una función que pueda retornar el arreglo completo de turnos.
export const getAllTurnService= async():Promise<Appointment[]>=>{
    const appointments: Appointment[]= await appointRepository.find({
        relations:{
            user:true
        }
    });
    return appointments
}
// !Implementar una función que pueda obtener el detalle de un turno por ID.
export const getTurnByIdService= async(id:number): Promise<Appointment | null>=>{
    const turnId= await appointRepository.findAppointById(id)
    return turnId
    // const turnById= appointments.find((turn:IAppointment)=>{
    //     return turn.id===id
    // });
    // return turnById
}
//! Implementar una función que pueda crear un nuevo turno, siempre, además, el ID del usuario que ha creado dicho turno. NO PUEDE HABER UN TURNO SIN ID DE USUARIO. 
export const postTurnService= async(data: dtoAppointment): Promise<Appointment |void>=>{
    const queryRunner= AppDataSource.createQueryRunner();
    queryRunner.connect();

    try{
        queryRunner.startTransaction();
        const createTurn: Appointment= appointRepository.create(data);
        await queryRunner.manager.save(createTurn);
        //encontrar al USER con el userId de la nueva appointment 
        const user= await userRepository.findOneBy({
            "id": data.userId
        });
        //como manyToOne rellenamos tambien los datos dle usuario al appointment
        if(!user){
            throw new Error('UserId inexistente. No se ha podido crear el turno')};
    
        createTurn.user= user;
        await queryRunner.manager.save(createTurn);
        await queryRunner.commitTransaction();
        return createTurn
    } catch(err){
        await queryRunner.rollbackTransaction();
        throw new Error('UserId inexistente. No se ha podido crear el turno')
    } finally{
        console.log('Ha finalizado el intento de creacion de turno')
        await queryRunner.release()
    }

    // const newTurn={
    //     id: appointments.length+1,
    //     date: data.date,
    //     time: data.time,
    //     userId: data.userId,
    //     status: data.status
    // };
    // appointments.push(newTurn);
    // return newTurn
}
//! Implementar una función que reciba el id de un turno específico y una vez identificado el turno correspondiente, cambiar su estado a “cancelled”.
export const putCancelTurnService= async(id: number): Promise<Appointment|null>=>{
    const turnId:Appointment|null= await appointRepository.findOneBy({id});
    if(turnId){
        turnId.status= 'cancelled'
        await appointRepository.save(turnId);
        return turnId
    }else{throw new Error()};    
    // let turns= appointments.find((turn:IAppointment)=>{
    //     return turn.id=== id
    // });
    // if (turns) {
    //     turns.status = 'canceled';
    //   };
    // return turns 
}
