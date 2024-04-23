import { Repository } from "typeorm";
import { AppDataSource } from "../database";
import { Todo } from "../graphql/entity/todoEntity";

export class TodoRepository{
    private repo : Repository<Todo>;

    constructor(){
        this.repo=AppDataSource.getRepository(Todo)
    }

    async findAll(): Promise<Todo[]>{
        return await this.repo.find()
    }

    async findOne(id: number):Promise<Todo>{
        return await this.repo.findOneBy({id})
    }

    async addTodo(todo : Todo): Promise<Todo>{
        return this.repo.save(todo)
    }

    async delete(todoId : number){
        const deleteTodo= this.repo.delete(todoId);
        return deleteTodo
    }
}