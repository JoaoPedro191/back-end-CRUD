import { FastifyRequest, FastifyReply } from "fastify";
import { CreateUserUseCase } from "./CreateUserUseCase";

class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) {}
  async handle(request: FastifyRequest, reply: FastifyReply): Promise<void> {
    const { name, email, phone, city } = request.body;
    await this.createUserUseCase.execute({ name, email, phone, city });
    return reply.status(201).send();
  }
}

export { CreateUserController };
