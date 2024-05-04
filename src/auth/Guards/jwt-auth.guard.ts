import {
  Injectable,
  ExecutionContext,
  UnauthorizedException,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  canActivate(context: ExecutionContext) {
    // Add custom logic if needed before calling super.canActivate()
    return super.canActivate(context);
  }

  handleRequest(err, patient) {
    if (err || !patient) {
      // You can customize the error message or status code as needed
      throw err || new UnauthorizedException('Unauthorized access');
    }
    return patient;
  }
}
