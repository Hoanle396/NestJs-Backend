import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { getRepository, Repository } from 'typeorm';
import { User } from './users.entity';


@Injectable()
export class UsersService {
  // private readonly users = [
  //   {
  //     userId: 1,
  //     username: 'john',
  //     password: 'changeme',
  //   },
  //   {
  //     userId: 2,
  //     username: 'maria',
  //     password: 'guess',
  //   },
  // ];

  
  // async RegisterUser(user: string ,pass: string): Promise<User | undefined> {
  //   this.users.push({'userId':3,'username':user,'password':pass});
  //   return this.users;
  // }
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

  async findByEmail(email: string): Promise<User | undefined> {
    const user= this.usersRepository.createQueryBuilder("User").where(`user.Email = ${email}`).getOne();
    return user;
  }

  async remove(id: string): Promise<void> {
    await this.usersRepository.delete(id);
  }
  async Register(firstName,lastName,Email,password): Promise<User>{
    var user= new User();
    user.firstName = firstName;
    user.lastName = lastName;
    user.Email = Email;
    user.password = password;
    return this.usersRepository.save(user);
    // console.log(user);
    // return user;
  }
}