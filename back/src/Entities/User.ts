import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm"
import { credential } from "./Credential"
import { Appointment } from "./Appointment"
import { Pet } from "./Pets"


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
    @Column("integer")
    nDni: number
    @OneToOne(()=>credential) //relacion con credenciales
    @JoinColumn()
    credentials: credential
    @OneToMany(()=>Appointment, (appointment)=>appointment.user)
    appointments: Appointment[]
    @OneToMany(()=>Pet, (pet)=>pet.user)
    pets: Pet[]
}
