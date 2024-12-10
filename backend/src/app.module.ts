import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import { User } from './user/user.entity';
import { RoomModule } from './room/room.module';
import { RoomController } from './room/room.controller';
import { RoomService } from './room/room.service';
import { Room } from './room/room.entity';
import { MessageService } from './message/message.service';
import { MessageModule } from './message/message.module';
import { MessageController } from './message/message.controller';
import { Message } from './message/message.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    UserModule,
    RoomModule,
    MessageModule,
    ConfigModule.forRoot({
      envFilePath: './.env',
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DATABASE_HOST,
      port: Number(process.env.DATABASE_PORT),
      username: process.env.DATABASE_USERNAME,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
      entities: [User, Room, Message],
    }),
  ],
  controllers: [
    AppController,
    MessageController,
    UserController,
    RoomController,
  ],
  providers: [AppService, MessageService, UserService, RoomService],
})
export class AppModule {}
