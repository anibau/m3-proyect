import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm"
import { Credential } from "./Credential"
import { Appointment } from "./Appointment"

@Entity({
    name: "users"
})
export class User{
    @PrimaryGeneratedColumn()
    id: number
    @Column("text") 
    name: string
    @Column()
    lastName: string
    @Column()
    email: string
    @Column()
    birthdate: string
    @Column()
    nDni: string
    @Column()
    telefono: string
    @OneToOne(()=>Credential) //relacion con credenciales
    @JoinColumn()
    credentials: Credential
    @OneToMany(()=>Appointment, (appointment)=>appointment.user)
    appointments: Appointment[]
}
