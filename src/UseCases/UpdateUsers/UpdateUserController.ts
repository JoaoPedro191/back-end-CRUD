import { FastifyRequest, FastifyReply } from "fastify";
import { UpdateUserUseCase } from "./UpdateUserUseCase";

class UpdateUserController {
  constructor(private updateUserUseCase: UpdateUserUseCase) {}
  async handle(request: FastifyRequest, reply: FastifyReply): Promise<void> {
    const { id } = request.params;
    const { name, email, phone, city } = request.body;
    await this.updateUserUseCase.execute({ id, name, email, phone, city });
    return reply.status(204).send();
  }
}

export { UpdateUserController };
