import { ApolloServer } from "apollo-server-express";
import express, { Application } from "express";
import { AppDataSource } from "./database";
import { todoTypeDefs } from "./graphql/todoTypeDefs";
import { TodoResolver } from "./resolvers/todoResolver";
import TypeDefs from "./graphql/TypeDefs";
const startServer = async (): Promise<Application> => {
  console.log("server started");
  let app: any;
  await AppDataSource.initialize()
    .then(async () => {
      console.log("Connected Database Sucessfully");
      app = express();
      const apolloServer = new ApolloServer({
        typeDefs: TypeDefs,
        resolvers:TodoResolver,
        formatError: (err) => {
          return {
            message: err.message,
            locations: err.locations,
            path: err.path,
          };
        },
      });

      await apolloServer.start();
      apolloServer.applyMiddleware({ app, path: "/graphql" });
      const port=4000
      app.listen(port,()=>console.log(`Server is Running on ${port}`))
    })
    .catch((error) => console.log(error));

  return app;
};

export default startServer();
