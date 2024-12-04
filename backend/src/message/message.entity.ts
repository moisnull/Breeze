import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Message {
    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    content: string;

    @Column()
    attachment: string;

    @Column()
    userId: string;

    @Column()
    roomId: string;

    @Column()
    createdAt: Date;
}