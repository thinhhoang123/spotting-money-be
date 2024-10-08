import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { PrismaService } from './prisma.service';

@Module({
  imports: [ConfigModule.forRoot(), UserModule, AuthModule],
  controllers: [],
  providers: [AppService, PrismaService],
})
export class AppModule {}
