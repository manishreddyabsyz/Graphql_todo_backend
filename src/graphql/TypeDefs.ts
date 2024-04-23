import { gql } from "apollo-server-express";
import { todoTypeDefs } from "./todoTypeDefs";



const TypeDefs=gql`

type Query{
    _empty: String
}

type Mutation{
    _empty: String
}
`

export default [TypeDefs,todoTypeDefs]