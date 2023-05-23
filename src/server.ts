import fastify from "fastify";
import {
  createUser,
  listUser,
  updateUser,
  deleteUser,
} from "./Routes/UsersRoutes";
import cors from "@fastify/cors";

const server = fastify();

server.register(createUser);
server.register(listUser);
server.register(updateUser);
server.register(deleteUser);
server.register(cors, {
  origin: true,
});

server.listen(
  { port: process.env.PORT ? Number(process.env.PORT) : 3333 },
  () => {
    console.log("está rodando na porta 5000");
  }
);
