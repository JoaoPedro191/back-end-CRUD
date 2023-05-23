import { FastifyRequest, FastifyReply } from "fastify";
import { DeleteUserUseCase } from "./DeleteUserUseCase";

class DeleteUserController {
  constructor(private deleteUserUseCase: DeleteUserUseCase) {}
  async handle(request: FastifyRequest, reply: FastifyReply): Promise<void> {
    const { id } = request.params;
    await this.deleteUserUseCase.execute(id);
    return reply.status(204).send();
  }
}
export { DeleteUserController };
