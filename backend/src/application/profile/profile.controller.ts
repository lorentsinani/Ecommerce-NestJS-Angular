import { Controller, Get, Request, Patch, Body, UsePipes, ValidationPipe } from '@nestjs/common';
import { TokenVerifierCustomRequest } from '../../common/interfaces/jwt-payload.interface';
import { UpdateUserDto } from '../../common/dtos/users/update-user.dto';
import { User } from '../../domain/entities/user.entity';
import { ProfileService } from './profile.service';
import { ChangePasswordDto } from '../../common/dtos/profile/change-password.dto';

@Controller('profile')
export class ProfileController {
  constructor(private profileService: ProfileService) {}

  @Get()
  findUserDetails(@Request() request: TokenVerifierCustomRequest): Promise<User> {
    const userId: number = this.getUserIdFromToken(request);
    return this.profileService.findUserDetails(userId);
  }

  @Patch('update-details')
  @UsePipes(new ValidationPipe())
  updateUserDetails(@Request() request: TokenVerifierCustomRequest, @Body() updateUserDto: UpdateUserDto): Promise<User> {
    const userId: number = this.getUserIdFromToken(request);
    return this.profileService.updateUserDetails(userId, updateUserDto);
  }

  @Patch('update-password')
  @UsePipes(new ValidationPipe())
  updateUserPassword(@Request() request: TokenVerifierCustomRequest, @Body() changePassword: ChangePasswordDto): Promise<User> {
    const userId: number = this.getUserIdFromToken(request);
    return this.profileService.updateUserPassword(userId, changePassword);
  }

  getUserIdFromToken(request: TokenVerifierCustomRequest): number {
    return request.jwtPayload?.sub as number;
  }
}
