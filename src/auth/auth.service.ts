import { Injectable, UnauthorizedException, NotAcceptableException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { UserUseCases } from 'src/uses-cases/user/user.use-case';


@Injectable()
export class AuthService {
  private readonly users = [
    {
      userId: 1,
      username: 'john',
      password: 'changeme',
    },
    {
      userId: 2,
      username: 'maria',
      password: 'guess',
    },
  ];

  async findOne(username: string): Promise<any | undefined> {
    return this.users.find(user => user.username === username);
  }
  constructor(private userUseCases: UserUseCases, private jwtService: JwtService) { }

  async validateUser(username: string, password: string): Promise<any> {
    const user = await this.userUseCases.getUser(username);
    const passwordValid = await bcrypt.compare(password, 'user.password')
    if (!user) {
      throw new NotAcceptableException('could not find the user');
    }
    if (user && passwordValid) {
      return {
        userId: user.id,
        userName: user.username
      };
    }
    return null;
  }

  async signIn(username: string, pass: string): Promise<any> {
    const user = await this.findOne(username); // in a real app we could use bcrypt
    if (user?.password !== pass) {
      throw new UnauthorizedException();
    }
    const { password, ...result } = user;
    // TODO: Generate a JWT and return it here
    // instead of the user object
    const payload = { sub: user.userId, username: user.username };
    return {
      PRUEBA: 'SUCESSS',
      access_token: await this.jwtService.signAsync(payload),
    };;
  }
}
