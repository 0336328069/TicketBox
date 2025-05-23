import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { User } from './entities/user.entity';
import { Module } from '@nestjs/common';
@Module({
  imports: [TypeOrmModule.forFeature([User])], // Đăng ký repository cho User entity
  controllers: [UsersController],
  providers: [UsersService], // Đăng ký service
  exports: [UsersService], // (Tùy chọn) export service cho module khác dùng
})
export class UsersModule {}
