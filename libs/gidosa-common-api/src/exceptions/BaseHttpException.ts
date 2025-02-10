import { HttpStatus } from '@nestjs/common';
import { BaseHttpErrorCode } from '../constants/enums/BaseHttpErrorCode';

export class BaseHttpException extends Error {
  private readonly baseHttpErrorCode: BaseHttpErrorCode;
  private readonly status: HttpStatus;

  constructor(baseHttpErrorCode: BaseHttpErrorCode) {
    const errorDetail = baseHttpErrorCode;
    super(errorDetail.message);

    this.baseHttpErrorCode = errorDetail;
    this.status = errorDetail.status;

    // 유지 가능한 스택 추적 생성
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, this.constructor);
    }
  }

  public getBaseHttpErrorCode(): BaseHttpErrorCode {
    return this.baseHttpErrorCode;
  }

  public getStatus(): HttpStatus {
    return this.status;
  }
}
