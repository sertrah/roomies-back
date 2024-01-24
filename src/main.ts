import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';


// TO handle the session
import * as session from "express-session"
import * as passport from "passport"


async function bootstrap() {
  const app = await NestFactory.create(AppModule , {
    cors: {
      "origin": "*",
      "methods": "GET,HEAD,PUT,POST,DELETE",
    }
  });

  app.use(
    session({
      secret: "keyboard",
      resave: false,
      saveUninitialized: false,
    })
  )
  app.use(passport.initialize())
  app.use(passport.session())
  await app.listen(3000);
}
bootstrap();
