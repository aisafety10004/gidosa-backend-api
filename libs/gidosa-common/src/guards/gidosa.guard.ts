//import { BaseHttpErrorCode } from '@app/gidosa-common-api/constants/enums/BaseHttpErrorCode';
import { BaseHttpErrorCode } from '../../../gidosa-common-api/constants/enums/BaseHttpErrorCode';
import {
    BadRequestException,
    ExecutionContext,
    UnauthorizedException,
  } from '@nestjs/common';
  import { JsonWebTokenError, TokenExpiredError } from '@nestjs/jwt';
  import { AuthGuard } from '@nestjs/passport';

  export const GidosaAuthGuard = (name: string) => {
    return class GidosaAuthGuard extends AuthGuard(name) {
      handleRequest(err, user, info, context) {
        if (!info) return context.switchToHttp().getRequest();
  
        console.error('InfoName: ', info.name);
        console.error('InfoMessage: ', info.message);
  
        if (info instanceof TokenExpiredError) {
          throw new UnauthorizedException(
            BaseHttpErrorCode.AUTHENTICATION_EXPIRED_TOKEN_ERROR,
          );
        } else if (
          info instanceof JsonWebTokenError ||
          info instanceof BadRequestException ||
          info instanceof SyntaxError
        ) {
          throw new UnauthorizedException(
            BaseHttpErrorCode.AUTHENTICATION_INVALID_TOKEN_ERROR,
          );
        } else {
          throw new UnauthorizedException(
            BaseHttpErrorCode.AUTHENTICATION_UNKNOWN_ERROR,
          );
        }
      }
      getRequest(context: ExecutionContext) {
        return context.switchToHttp().getRequest();
      }
    };
  };
  