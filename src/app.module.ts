import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { BoardModule } from './board/board.module';
import { CardModule } from './card/card.module';
import { ColumnModule } from './column/column.module';
import { TaskModule } from './task/task.module';
import { TasksModule } from './tasks/tasks.module';

@Module({
  imports: [AuthModule, BoardModule, CardModule, ColumnModule, TaskModule, TasksModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
