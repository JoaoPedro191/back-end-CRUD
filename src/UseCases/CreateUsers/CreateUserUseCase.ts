import { UserRepository } from "../../Repositories/implementations/UserRepository";

interface IRequest {
  name: string;
  email: string;
  phone: string;
  city: string;
}

class CreateUserUseCase {
  constructor(private userRepository: UserRepository) {}
  async execute({ name, email, phone, city }: IRequest): Promise<void> {
    await this.userRepository.create({ name, email, phone, city });
  }
}
export { CreateUserUseCase, IRequest };
