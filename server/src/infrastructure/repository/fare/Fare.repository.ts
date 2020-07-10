import { EntityRepository, Repository } from 'typeorm'
import { FareEntity } from 'domain/model/fare/fare.entity'

@EntityRepository(FareEntity)
export class FareRepository extends Repository<FareEntity> {
  findOneById(fareId: number) {
    return this.findOne({ where: { id: fareId } })
  }

  find(){
      return this.find()
  }
}
