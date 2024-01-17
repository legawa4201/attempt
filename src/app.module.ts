import { Module } from '@nestjs/common';
import { EmployeeModule } from './resources/employee/employee.module';
import { AttendanceModule } from './resources/attendance/attendance.module';

@Module({
  imports: [
    EmployeeModule,
    AttendanceModule
  ]
})
export class AppModule {}
