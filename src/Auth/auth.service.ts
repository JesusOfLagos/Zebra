import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  getHello(): string {
    return 'Hello World!';
  }

    login(): string {
        return 'Login!';
    }

    register(): string {
        return 'Register!';
    }

    logout(): string {
        return 'Logout!';
    }

    forgotPassword(): string {
        return 'Forgot Password!';
    }

    resetPassword(): string {
        return 'Reset Password!';
    }

    verifyEmail(): string {
        return 'Verify Email!';
    }

    resendVerificationEmail(): string {
        return 'Resend Verification Email!';
    }

    changeEmail(): string {
        return 'Change Email!';
    }

    changePassword(): string {
        return 'Change Password!';
    }

    changeUsername(): string {
        return 'Change Username!';
    }
}
