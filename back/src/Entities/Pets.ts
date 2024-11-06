import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm"

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
}