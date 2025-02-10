import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

@Injectable()
export class RequestMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const chunks: Buffer[] = [];

    if (req.url !== '/favicon.ico') {
      console.log('--- Request Logging Middleware ---');
      console.log('Request URL:', req.url);
      console.log('Request Method:', req.method);
      console.log('Request Body:', req.body);
    }

    const originalWrite = res.write.bind(res);
    const originalSend = res.send.bind(res);

    res.write = (chunk: any, ...args: any[]) => {
      chunks.push(Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk));
      return originalWrite(chunk, ...args);
    };

    res.send = (body: any): Response => {
      if (req.url !== '/favicon.ico') {
        console.log('--- Request Filter: After Request ---');
        console.log('Response Body:', body || '(empty)');
      }
      return originalSend(body);
    };

    next();
  }
}
