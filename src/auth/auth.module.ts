import { Module } from '@nestjs/common';
import { PassportModule } from "@nestjs/passport"
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { SessionSerializer } from "./session.serializer"

import { jwtConstants } from './constants';
import { LocalStrategy } from './local.strategy';
import { UserUseCasesModule } from 'src/uses-cases/user/user-use-cases.module';


@Module({
  imports: [
    UserUseCasesModule,
    PassportModule.register({ session: true }),
    JwtModule.register({
      global: true,
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '60s' },
    }),],
  providers: [AuthService, LocalStrategy, SessionSerializer],
  controllers: [AuthController],
})
export class AuthModule { }