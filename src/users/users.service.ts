import { Injectable } from '@nestjs/common';

export type User = any;

@Injectable()
export class UsersService {
private readonly users = [
{
  userId: 1,
  username: "Osvaldo",
  password: "123",
},
{
  userId: 2,
  username: "Melo",
  password: "456",
},
];
async findOne(username: string): Promise<User | undefined> {
return this.users.find(user => user.username === username);
}
}
