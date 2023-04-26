import { Controller, Get, Request, Patch, Body, UsePipes, ValidationPipe } from '@nestjs/common';
import { TokenVerifierCustomRequest } from '../../common/interfaces/jwt-payload.interface';
import { UsersService } from '../../domain/users/users.service';
import { UpdateUserDto } from '../../common/dtos/users/update-user.dto';
import { IUser } from '../../common/interfaces/user.interface';

@Controller('profile')
// @UseGuards(CustomerGuard)
export class ProfileController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  findUserDetails(@Request() request: TokenVerifierCustomRequest): Promise<IUser> {
    const userId = request.jwtPayload?.user.id as number;
    return this.usersService.findById(userId);
  }

  @Patch()
  @UsePipes(new ValidationPipe())
  updateUserDetails(@Request() request: TokenVerifierCustomRequest, @Body() updateUserDto: UpdateUserDto): Promise<IUser> {
    const userId = request.jwtPayload?.user.id as number;
    return this.usersService.update(userId, updateUserDto);
  }
}
