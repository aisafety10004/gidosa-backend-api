import { Controller, Get } from '@nestjs/common';
//import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller()
// @ApiTags('health-check')
export class ApiGidosaWebappController {
  constructor() {}

  @Get()
  // @ApiOperation({ summary: '헬스 체크' })
  // @ApiResponse({
  //   status: 200,
  //   description: '헬스 체크.',
  //   type: String,
  // })
  getHello(): string {
    return 'Hello Gidosa';
  }
}
