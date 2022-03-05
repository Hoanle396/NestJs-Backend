import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './users.entity';


@Injectable()
export class UsersService {
  
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  findOne(id: string): Promise<User> {
    return this.usersRepository.findOne(id);
  }
  
  findByEmail(email: string): Promise<User> {
    const user= this.usersRepository.createQueryBuilder("User").where("User.email = :email", { email: email }).getOne();
    return user;
  }

  async remove(id: string): Promise<void> {
    await this.usersRepository.delete(id);
  }
  async Register(users:any): Promise<User>{
    var user= new User();
    user.firstName = users.firstName;
    user.lastName = users.lastName;
    user.email = users.email;
    user.password = users.password;
    return this.usersRepository.save(user);
  }
}