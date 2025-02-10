import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class AuthInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const request = context.switchToHttp().getRequest();
    const response = context.switchToHttp().getResponse();

    console.log('--------- auth interceptor preHandle ---------');

    // 요청 처리를 계속 진행
    return next.handle().pipe(
      tap(() => {
        console.log('--------- auth interceptor postHandle ---------');
      }),
      tap({
        error: (err) => {
          console.error(
            '--------- auth interceptor afterCompletion ---------',
            err,
          );
        },
      }),
    );
  }
}
