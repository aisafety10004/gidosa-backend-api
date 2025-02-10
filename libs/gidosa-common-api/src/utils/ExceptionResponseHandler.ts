import { Response } from 'express';

export class ExceptionResponseHandler {
  /**
   * 공통 응답 메서드
   * @param response Express Response 객체
   * @param status HTTP 상태 코드
   * @param message 에러 메시지
   * @param path 요청 경로
   */
  public static sendErrorResponse(
    response: Response,
    status: number,
    message: string,
    path: string,
  ) {
    response.status(status).json({
      statusCode: status,
      message,
      path,
    });
  }
}
