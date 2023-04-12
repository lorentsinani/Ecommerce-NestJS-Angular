import { Column, CreateDateColumn, PrimaryGeneratedColumn } from "typeorm";
import { INewsletter } from "../../common/interfaces/newsletter.interface";

export class Newsletter implements INewsletter {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({unique: true, length: 100})
    email: string;

    @CreateDateColumn()
    created_at: Date;
}