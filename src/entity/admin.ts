import { Entity, Column, PrimaryGeneratedColumn  } from "typeorm";

@Entity()
export class Admin {
    @PrimaryGeneratedColumn("uuid")
    id: number

    @Column()
    firstName: string

    @Column()
    lastName: string

    @Column()
    isActive: boolean
}