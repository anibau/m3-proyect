import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm"
import { User } from "./User"

@Entity({name: "pets"})
export class Pet{
    @PrimaryGeneratedColumn()
    id: number
    @Column()
    name: string
    @Column()
    age: number
    @Column()
    weight: string
    @Column()
    raza: string
    @ManyToOne(()=>User, (user)=>{user.pets})
    user: User
}