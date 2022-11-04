import { IsNotEmpty } from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'users' })
/* We have a User class with a username, email, and password. The username and email are unique */
export class User {
  @PrimaryGeneratedColumn()
  @IsNotEmpty()
  id: number;

  @IsNotEmpty()
  @Column({ unique: true })
  username: string;

  @IsNotEmpty()
  @Column({ unique: true })
  email: string;

  @IsNotEmpty()
  @Column()
  password: string;
}