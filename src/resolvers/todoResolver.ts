import { Todo } from "../graphql/entity/todoEntity";
import { TodoRepository } from "../respositories/TodoRepositories";
import { TodoService } from "../service/TodoService";

export interface createTodoArgs{
    input:{
        subject : string;
        marks : number;
    }
}

export interface updateTodoArges{
    input:{
        id : number;
        subject : string;
        marks : number;
    }
}

export interface deleteTodoArgs{
    id:number
}


const todoRespository= new  TodoRepository();
const todoservice= new TodoService(todoRespository)

export const TodoResolver={
    Query:{
        getAllTodos: async():Promise<Todo[]>=>{
            return await todoservice.getAllTodos();
        }
    },

    Mutation : {
        createTodo: async(_: any,args: createTodoArgs)=>{
            return await todoservice.createTodo(args);
        },
        deleteTodo:async(_: any,{id}: deleteTodoArgs)=>{
            const deleteTodo= await todoservice.deleteTodo(id);
            return deleteTodo
        }
    }
}