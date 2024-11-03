import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm"
import { User } from "./User"

@Entity({name: "pets"})
export class Pet{
    @PrimaryGeneratedColumn()
    id: number
    @Column()
    namePet: string
    @Column()
    agePet: string
    @Column()
    weigthPet: string
    @Column()
    pet: string
    @ManyToOne(()=>User, (user)=>{user.pets})
    user: User
}