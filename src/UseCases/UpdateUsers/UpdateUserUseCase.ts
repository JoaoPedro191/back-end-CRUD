import { UserRepository } from "../../Repositories/implementations/UserRepository";

interface IRequest {
  id: string;
  name: string;
  email: string;
  phone: string;
  city: string;
}

class UpdateUserUseCase {
  constructor(private userRepository: UserRepository) {}
  async execute({ id, name, email, phone, city }: IRequest): Promise<void> {
    await this.userRepository.update({ id, name, email, phone, city });
  }
}
export { UpdateUserUseCase, IRequest };
