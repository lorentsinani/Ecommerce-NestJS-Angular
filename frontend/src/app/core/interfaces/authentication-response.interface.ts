import { User } from './user.interface';
import { LoginResponse } from './login-response.interface';

export type AuthenticationResponse = User | LoginResponse; 