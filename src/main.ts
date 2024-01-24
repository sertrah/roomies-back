import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';


// TO handle the session
import * as session from "express-session"
import * as passport from "passport"


async function bootstrap() {
<<<<<<< Updated upstream
  const app = await NestFactory.create(AppModule);
<<<<<<< Updated upstream
=======
=======
  const app = await NestFactory.create(AppModule , {
    cors: {
      "origin": "*",
      "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
    }
  });
>>>>>>> Stashed changes

  app.use(
    session({
      secret: "keyboard",
      resave: false,
      saveUninitialized: false,
    })
  )
  app.use(passport.initialize())
  app.use(passport.session())
<<<<<<< Updated upstream

=======
  app.enableCors()
>>>>>>> Stashed changes
>>>>>>> Stashed changes
  await app.listen(3000);
}
bootstrap();
