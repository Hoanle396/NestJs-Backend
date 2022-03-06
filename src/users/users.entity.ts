import { Entity, Column, PrimaryGeneratedColumn,Unique} from 'typeorm';

@Entity('User')

export class User {
  @PrimaryGeneratedColumn()
  id: number;
  
  @Column({nullable: false})
  firstName: string;

  @Column({nullable: false})
  lastName: string;
  
  @Column({unique: true})
  email : string;

  @Column({nullable: false})
  password: string;

  @Column({ default: true })
  isActive: boolean;
  
  @Column({nullable: true})
  avatarUrl: string;

  @Column({ default: false})
  isAdmin : boolean;

  @Column({ default: false })
  isCompany : boolean
}