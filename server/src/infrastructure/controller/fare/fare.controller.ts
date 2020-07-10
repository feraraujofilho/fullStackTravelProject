import { Controller, Get, Req, Request, UseGuards } from '@nestjs/common'
import { FareService } from 'domain/service/fare/fare.service'

@Controller('find')
export class FareController {
  constructor(
    private fareService: FareService,
  ) {}

  @Get()
  async listAllProjects(@Req() request: Request) {
    // eslint-disable-next-line no-unused-vars
    return this.fareService.listAll()
  }
}
