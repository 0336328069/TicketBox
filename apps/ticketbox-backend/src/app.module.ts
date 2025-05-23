import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mssql',
      host: 'localhost', // hoặc tên server của bạn
      port: 1433, // port mặc định của SQL Server
      username: 'sa', // user của bạn (ví dụ: sa)
      password: 'tuanhung', // password của bạn
      database: 'ticketbox', // tên database bạn đã tạo
      autoLoadEntities: true,
      synchronize: true,
      options: {
        encrypt: false, // Nếu dùng local, để false
        trustServerCertificate: true, // Nếu dùng local, để true
      },
    }),
    UsersModule,
  ],
})
export class AppModule {}
