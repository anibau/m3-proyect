import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm"
import { User } from "./User"

@Entity({name: "credentials"})
export class credential{
    @PrimaryGeneratedColumn()
    id: number
    @Column()
    username: string
    @Column()
    password: string
    @OneToOne(()=>User, (user)=>user.credentials)
    @JoinColumn()
    user: User
}