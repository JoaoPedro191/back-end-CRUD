import { FastifyRequest, FastifyReply } from "fastify";
import { ListUsersUseCase } from "./ListUsersUseCase";
import { Users } from "@prisma/client";

class ListUsersController {
  constructor(private listUsersUseCase: ListUsersUseCase) {}
  async handle(request: FastifyRequest, reply: FastifyReply): Promise<Users[]> {
    const allDatasOfUsers = await this.listUsersUseCase.execute();
    return reply.status(200).send(allDatasOfUsers);
  }
}

export { ListUsersController };
