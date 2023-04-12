import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { UsersModule } from "./users/users.module";
import { TypeOrmModule } from "@nestjs/typeorm";
import { datasourceOptions } from "db/data-source";

@Module({
  imports: [TypeOrmModule.forRoot(datasourceOptions), UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
