import { gql } from "apollo-server-express"
import { Subject } from "typeorm/persistence/Subject"

export const todoTypeDefs = gql`
type Todo {
    id:Int !
    subject: String !
    marks : Int !
}

extend type Query{
    getAllTodos :[Todo]
    }

extend type Mutation {
    createTodo(input : AddTodoInput !) : Todo! 
    updateTodo(input : UpdateTodoInput) : Todo!
    deleteTodo(id : Int!): Todo!
}

input AddTodoInput{
    subject : String !
    marks : Int !
}

input UpdateTodoInput {
    id : Int !,
    subject : String !,
    marks : Int !
}
`
