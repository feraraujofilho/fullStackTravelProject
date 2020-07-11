import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { FareRepository } from 'infrastructure/repository/fare/Fare.repository'
import { FareEntity } from 'domain/model/fare/fare.entity'

@Injectable()
export class FareService {
  constructor(
    @InjectRepository(FareRepository)
    private fareRepository: FareRepository,
  ) {}

  async listAll(): Promise<FareEntity> {
    return this.fareRepository.findOne({ where: { origin: "Berlin (alle)", destination: "London (alle)" }})
  }
}
