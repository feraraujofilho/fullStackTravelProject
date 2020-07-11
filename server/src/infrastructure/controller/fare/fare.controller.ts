import { Controller, Get } from '@nestjs/common'
import { FareService } from 'domain/service/fare/fare.service'
import { FareEntity } from 'domain/model/fare/fare.entity'

@Controller('find')
export class FareController {
  constructor(
    private fareService: FareService,
  ) {}

  @Get()
  async listAllProjects(): Promise<FareEntity> {
    // eslint-disable-next-line no-unused-vars
    return this.fareService.listAll()
  }
}
