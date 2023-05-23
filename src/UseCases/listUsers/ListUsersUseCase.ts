import { UserRepository } from "../../Repositories/implementations/UserRepository";
import { Users } from "@prisma/client";

class ListUsersUseCase {
  constructor(private usersRepository: UserRepository) {}
  async execute(): Promise<Users[]> {
    return this.usersRepository.list();
  }
}
export { ListUsersUseCase };
