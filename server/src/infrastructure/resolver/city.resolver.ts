import { CityService } from './../../domain/service/city/city.service';
import { CityEntity } from './../../domain/model/city/city.entity';

import { Query, Resolver } from '@nestjs/graphql'

// http://localhost:3000/graphql playground can be used to test the resolver

@Resolver('city')
export class CityResolver {
    constructor(private cityService: CityService) { }

    @Query()
    cities(): Promise<CityEntity[]> {
        return this.cityService.listAll()
    }
}

