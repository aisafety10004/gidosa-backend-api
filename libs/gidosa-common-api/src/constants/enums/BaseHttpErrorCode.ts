import { HttpStatus } from '@nestjs/common';

export const BaseHttpErrorCode = {
  UNKNOWN_INTERNAL_SERVER_ERROR: {
    status: HttpStatus.INTERNAL_SERVER_ERROR,
    message:
      '처리 중 알 수 없는 에러가 발생했습니다. 잠시 후 다시 시도해 주시기 바랍니다.',
  },
  AUTHENTICATION_UNKNOWN_ERROR: {
    status: HttpStatus.UNAUTHORIZED,
    message: '사용자 인증 처리 중 알 수 없는 오류가 발생했습니다.',
  },
  AUTHENTICATION_EMPTY_REFRESH_TOKEN_ERROR: {
    status: HttpStatus.UNAUTHORIZED,
    message: '리프레쉬 토큰이 없습니다.',
  },
  AUTHENTICATION_EMPTY_ACCESS_TOKEN_ERROR: {
    status: HttpStatus.UNAUTHORIZED,
    message: '엑세스 토큰이 없습니다.',
  },
  AUTHENTICATION_EXPIRED_TOKEN_ERROR: {
    status: HttpStatus.UNAUTHORIZED,
    message: '토큰이 만료되었습니다.',
  },
  AUTHENTICATION_INVALID_TOKEN_ERROR: {
    status: HttpStatus.UNAUTHORIZED,
    message: '유효하지 않은 토큰입니다.',
  },
  USER_DOES_NOT_EXISTS_ERROR: {
    status: HttpStatus.CONFLICT,
    message: '사용자 정보가 존재하지 않습니다.',
  },
  AUTHENTICATION_DOES_NOT_EXISTS_ERROR: {
    status: HttpStatus.UNAUTHORIZED,
    message:
      '사용자 인증정보가 존재하지 않습니다. 로그인 후 다시 이용 해 주세요!',
  },
  AUTHENTICATION_PASSWORD_MISMATCH_ERROR: {
    status: HttpStatus.UNAUTHORIZED,
    message:
      '사용자 로그인 아이디와 패스워드가 일치하지 않습니다. 다시 사용자 정보를 확인해 주세요.',
  },
  PASSWORD_PATTERN_MISMATCH_ERROR: {
    status: HttpStatus.BAD_REQUEST,
    message:
      '패스워드는 영문 대소문자, 숫자, 특수문자를 3가지 이상 포함하여 최소 8자, 최대 20자로 입력하세요.',
  },
  USER_PASSWORD_NOT_DUPLICATE_KEY_VALUE_ERROR: {
    status: HttpStatus.CONFLICT,
    message: '비밀번호가 일치 하지 않습니다. 다시 확인후 요청해주세요.',
  },
} as const;

export type BaseHttpErrorCode =
  (typeof BaseHttpErrorCode)[keyof typeof BaseHttpErrorCode];
