import { gql } from 'apollo-boost'

const OriginAndDestinations = gql`
    query OriginAndDestinations($origin: String!, $destination1: String!, $destination2: String, $destination3: String, $destination4: String){
        originAndDestinations(origin: $origin, destination1: $destination1, destination2: $destination2, destination3: $destination3, destination4: $destination4){
            name
            abb
        }
    }
`

export default { OriginAndDestinations }