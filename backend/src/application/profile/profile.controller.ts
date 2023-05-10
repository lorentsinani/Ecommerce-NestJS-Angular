import { Controller, Get, Request, Patch, Body, UsePipes, ValidationPipe } from '@nestjs/common';
import { TokenVerifierCustomRequest } from '../../common/interfaces/jwt-payload.interface';
import { UpdateUserDto } from '../../common/dtos/users/update-user.dto';
import { User } from '../../domain/entities/user.entity';
import { ProfileService } from './profile.service';

@Controller('profile')
export class ProfileController {
  constructor(private profileService: ProfileService) {}

  @Get()
  findUserDetails(@Request() request: TokenVerifierCustomRequest): Promise<User> {
    const userId: number = request.jwtPayload?.user.id as number;
    return this.profileService.findUserDetails(userId);
  }

  @Patch()
  @UsePipes(new ValidationPipe())
  updateUserDetails(@Request() request: TokenVerifierCustomRequest, @Body() updateUserDto: UpdateUserDto): Promise<User> {
    const userId: number = request.jwtPayload?.user.id as number;
    return this.profileService.updateUserDetails(userId, updateUserDto);
  }
}
