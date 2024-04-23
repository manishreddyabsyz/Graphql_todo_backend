import { Todo } from "../graphql/entity/todoEntity";
import { createTodoArgs } from "../resolvers/todoResolver";
import { TodoRepository } from "../respositories/TodoRepositories";

export class TodoService{
    private todoRepository: TodoRepository;
    
    constructor(todoRepository: TodoRepository){
        this.todoRepository = todoRepository;
    }

    async getAllTodos():Promise<Todo[]>{
        return this.todoRepository.findAll();
    }


    async createTodo(todoargs : createTodoArgs){
        const todo = new Todo();
        todo.updatedAt= new Date();
        todo.updatedAt = new Date();
        todo.subject=todoargs.input.subject;
        todo.marks=todoargs.input.marks
        return this.todoRepository.addTodo(todo)
}

async deleteTodo(todoId : number){
    return this.todoRepository.delete(todoId)
}


}
