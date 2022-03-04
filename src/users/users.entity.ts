import { Entity, Column, PrimaryGeneratedColumn,Unique} from 'typeorm';

@Entity('User')

export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;
  
  @Column({unique: true})
  Email : string;

  @Column()
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