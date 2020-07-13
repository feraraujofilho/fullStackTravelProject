import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { FareRepository } from 'infrastructure/repository/fare/Fare.repository'
import { FareEntity } from 'domain/model/fare/fare.entity'
import { RequestFaresParametersDto } from 'infrastructure/controller/fare/dto/requestFaresParametersDto'

@Injectable()
export class FareService {
  constructor(
    @InjectRepository(FareRepository)
    private fareRepository: FareRepository,
  ) {}

  async listAll(): Promise<FareEntity[]> {
    return this.fareRepository.find()
  }

//   async findManyFromRequest(requestFaresParametersDto: RequestFaresParametersDto):Promise<FareEntity[]>  {
//       const {origin, destination1, destination2, destination3, destination4, nights} = requestFaresParametersDto  

//       return this.fareRepository.find({
//         where: [
//           { origin, destination: destination1 },
//           { origin: destination1, destination: origin }
//         ]
//       })
//   }

  getManyByMatch(origin: string, destination1: string, destination2: string): Promise<FareEntity[]> {
    return this.fareRepository.find({
        where: [
          { origin, destination: destination1 },
          { origin: destination1, destination: origin },
          { origin, destination: destination2 },
          { origin: destination2, destination: origin }
        ]
      })
  }
}
