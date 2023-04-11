// import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
// import { Reflector } from '@nestjs/core';
// import { EmployeeGuard } from './employee.guard';
// import { AnotherGuard } from './another.guard';

// @Injectable()
// export class CombinedGuards implements CanActivate {
//   constructor(private readonly reflector: Reflector, private readonly employeeGuard: EmployeeGuard, private readonly anotherGuard: AnotherGuard) {}

//   async canActivate(context: ExecutionContext): Promise<boolean> {
//     const isEmployee = await this.employeeGuard.canActivate(context);
//     const isAnother = await this.anotherGuard.canActivate(context);

//     return isEmployee || isAnother;
//   }
// }
