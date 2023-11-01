import {
    Column,
    CreateDateColumn,
    DeleteDateColumn,
    Entity,
    JoinTable,
    ManyToMany,
    ManyToOne,
    OneToMany,
    PrimaryGeneratedColumn, UpdateDateColumn
} from "typeorm";
import { PetEntity } from "./pet.entity";
import { LocalEntity } from "./local.entity";
import { Locals } from "express";
import { DoctorEntity } from "./doctor.entity";

@Entity('clients', { schema: 'veterinaria' })
export class ClientEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;
    @CreateDateColumn({
        name: 'crate_atClient',
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP',
    })
    creatAt: Date;
    @UpdateDateColumn({
        name: 'update_at',
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP',
    })
    updateAt: Date;
    @DeleteDateColumn({
        name: 'crate_at',
        type: 'timestamp',
        nullable: true,
    })
    deleteAt: Date;

    
    //Columnas
    @Column('varchar', {
        name: 'nameClient',
        nullable: false,
        comment: 'client name',
    })
    name: string;
    @Column('varchar', {
        name: 'fullName',
        nullable: false,
        comment: 'client fullName',
    })
    fullName: string;
    @Column('varchar', {
        name: 'address',
        nullable: false,
        comment: 'client address',
    })
    address: string;
    @Column('varchar', {
        name: 'email',
        nullable: false,
        comment: 'client email',
    })
    email: string;
    @Column('integer', {
        name: 'phone',
        nullable: false,
        comment: 'client phone',
    })
    phone: number;
    //Relacion locales
    @ManyToMany(() => LocalEntity, locals => locals.clients)
    @JoinTable()
    locals: LocalEntity[];
    //mascota
    @OneToMany(() => PetEntity, pet => pet.client)
    pet: PetEntity[];
    //doctor
    @ManyToOne(() => DoctorEntity, doctors => doctors.client)
    doctors: PetEntity[];
}
