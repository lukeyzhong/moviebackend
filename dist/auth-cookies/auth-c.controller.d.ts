import { Response, Request } from 'express';
import { AuthCookieService } from './auth-c.service';
import { User } from '../auth/entities/user.entity';
import { SignInCredentialsDto } from 'src/auth/dto/signin.dto';
import { SignUpCredentialsDto } from 'src/auth/dto/signup.dto';
import { UpdateCredentialDto } from 'src/auth/dto/update-user.dto';
import { CheckEmailDto } from 'src/auth/dto/check-email.dto';
export declare class AuthCookieController {
    private authService;
    constructor(authService: AuthCookieService);
    signUp(signupCredentialsDto: SignUpCredentialsDto, res: Response): Promise<User>;
    signIn(signinCredentialsDto: SignInCredentialsDto, res: Response): Promise<User>;
    initapp(user: User): Promise<User>;
    signOut(res: Response): void;
    checkEmail(checkEmailDto: CheckEmailDto): Promise<boolean>;
    updateUser(user: User, updateCredentialDto: UpdateCredentialDto, res: Response): Promise<User>;
    findAll(request: Request): void;
    refreshToken(user: User, res: Response): void;
}
