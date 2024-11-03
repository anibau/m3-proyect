import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm"
import { User } from "./User"

@Entity({
    name: "appointments"
})
export class Appointment {
    @PrimaryGeneratedColumn()
    id: number
    @Column()
    date: string
    @Column({length:20})
    time: string
    @ManyToOne(()=>User,(user)=>{user.appointments})
    user: User
    @Column()
    status: string
    @Column()
    pet:string
    @Column()
    namePet:string
    @Column()
    agePet:string
    @Column()
    weigthPet:string
    @Column()
    service: string
}
