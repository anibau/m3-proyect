import { dtoAppointment } from "../Dto/dtoAppointment";
import { IAppointment } from "../interfaces/IAppointment";

let appointments: IAppointment[]= [];
let turn1={
    id: 1,
    date: '01/10',
    time: '10 am',
    userId: 1,
    status:'active'
};
appointments.push(turn1);
// !Implementar una función que pueda retornar el arreglo completo de turnos.
export const getAllTurnService= async()=>{
    return appointments
}
// !Implementar una función que pueda obtener el detalle de un turno por ID.
export const getTurnByIdService= async(id:number)=>{
    const turnById= appointments.find((turn:IAppointment)=>{
        return turn.id===id
    });
    return turnById
}
//! Implementar una función que pueda crear un nuevo turno, siempre, además, el ID del usuario que ha creado dicho turno. NO PUEDE HABER UN TURNO SIN ID DE USUARIO. 
export const postTurnService= async(data: dtoAppointment)=>{
    const newTurn={
        id: appointments.length+1,
        date: data.date,
        time: data.time,
        userId: data.userId,
        status: data.status
    };
    appointments.push(newTurn);
    return newTurn
}
//! Implementar una función que reciba el id de un turno específico y una vez identificado el turno correspondiente, cambiar su estado a “cancelled”.
export const putCancelTurnService= async(id: number)=>{
    let turns= appointments.find((turn:IAppointment)=>{
        return turn.id=== id
    });
    if (turns) {
        turns.status = 'canceled';
      };
    return turns 
}
