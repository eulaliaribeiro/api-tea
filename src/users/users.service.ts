import { Injectable } from '@nestjs/common';

export type User = any;

@Injectable()
export class UsersService {
    private readonly users = [
        {
          userId: 1,
          username: 'Osvaldo',
          password: '12345',
        },
        {
          userId: 2,
          username: 'Eulalia',
          password: '54321',
        },
        ,
        {
          userId: 3,
          username: 'Raphael',
          password: '56789',
        },
      ];

      async findOne(username: string): Promise<User | undefined> {
        return this.users.find(user => user.username === username);
      }
}