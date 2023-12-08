import { AuthService } from './auth.service';
import { User } from './entities/user.entity';
import { CheckEmailDto } from './dto/check-email.dto';
import { RefreshTokenDto } from './dto/refresh-token.dto';
import { UpdateCredentialDto } from './dto/update-user.dto';
import { SignInCredentialsDto } from './dto/signin.dto';
import { SignUpCredentialsDto } from './dto/signup.dto';
import { DeleteUserDto } from './dto/delete-user.dot';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    signUp(signupCredentialsDto: SignUpCredentialsDto): Promise<{
        accessToken: string;
        role: string;
    }>;
    signIn(signinCredentialsDto: SignInCredentialsDto): Promise<{
        accessToken: string;
        role: string;
    }>;
    refreshToken(refreshTokenDto: RefreshTokenDto): Promise<{
        accessToken: string;
        role: import("./enums/user-role.enum").UserRole;
    }>;
    checkEmail(checkEmailDto: CheckEmailDto): Promise<boolean>;
    updateUser(user: User, updateCredentialDto: UpdateCredentialDto): Promise<{
        accessToken: string;
        role: import("./enums/user-role.enum").UserRole;
    }>;
    deleteAnyUser(user: User, deleteUserDto: DeleteUserDto): Promise<{
        email: string;
    }>;
    deleteUserById(user: User, id: string): Promise<User>;
}
