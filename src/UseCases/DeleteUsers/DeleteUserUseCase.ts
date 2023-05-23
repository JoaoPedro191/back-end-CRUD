import { UserRepository } from "../../Repositories/implementations/UserRepository";

class DeleteUserUseCase {
  constructor(private userRepository: UserRepository) {}
  async execute(id: string): Promise<void> {
    await this.userRepository.delete(id);
  }
}
export { DeleteUserUseCase };
