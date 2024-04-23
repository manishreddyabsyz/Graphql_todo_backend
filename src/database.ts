
import { DataSource } from "typeorm"
import { Todo } from "./graphql/entity/todoEntity"
export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "Manish@123",
    database: "todo",
    synchronize: true,
    logging: true,
    entities:[Todo],
    subscribers: [],
    migrations: [],
})

// export const getDataSource = async () => {
//     if(!AppDataSource.isInitialized) {
//         await AppDataSource.initialize()
//     }
//     console.log("MYSQL Connection Established Successfully")
//     return AppDataSource
// }

