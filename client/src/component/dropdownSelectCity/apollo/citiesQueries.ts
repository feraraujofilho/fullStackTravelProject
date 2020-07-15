import { gql } from 'apollo-boost'

const Cities = gql`
    query Cities{
        cities{
            name
            abb
        }
    }
`

export default { Cities }