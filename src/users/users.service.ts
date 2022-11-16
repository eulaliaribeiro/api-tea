import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Users } from
import { convert } from 'typeorm-schema-to-json-schema';



@Injectable()
export class UsersService {

  constructor(@InjectRepository(Users) private repository:Repository<Users>){}


  async findOne(userId: string) {

    const returnUser = await this.repository
    .createQueryBuilder("users")
    .where("users.username = :userId",{userId:userId})
    .getOne();

    return returnUser;
  }
}