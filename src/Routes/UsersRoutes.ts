import { FastifyInstance } from "fastify";
import { createUserController } from "../UseCases/CreateUsers/index";
import { listUsersController } from "../UseCases/listUsers/index";
import { updateUserController } from "../UseCases/UpdateUsers/index";
import { deleteUserController } from "../UseCases/DeleteUsers/index";

const path = "/users";

const createUser = async (fastify: FastifyInstance) => {
  fastify.post(path, (request, reply) => {
    return createUserController.handle(request, reply);
  });
};

const listUser = async (fastify: FastifyInstance) => {
  fastify.get(path, (request, reply) => {
    return listUsersController.handle(request, reply);
  });
};

const updateUser = async (fastify: FastifyInstance) => {
  fastify.put(`${path}/:id`, (request, reply) => {
    return updateUserController.handle(request, reply);
  });
};

const deleteUser = async (fastify: FastifyInstance) => {
  fastify.delete(`${path}/:id`, (request, reply) => {
    return deleteUserController.handle(request, reply);
  });
};

export { createUser, listUser, updateUser, deleteUser };
