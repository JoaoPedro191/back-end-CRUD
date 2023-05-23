import { IRequest } from "../UseCases/CreateUsers/CreateUserUseCase";
import { Users } from "@prisma/client";

interface ICreateUserDTO extends IRequest {}
interface IUpdateUserDTO extends IRequest {
  id: string;
}

interface IUserRepository {
  create({ name, email, phone, city }: ICreateUserDTO): Promise<void>;
  list(): Promise<Users[]>;
  update({ id, name, email, phone, city }: IUpdateUserDTO): Promise<void>;
  delete(id: string): Promise<void>;
}

export { IUserRepository, ICreateUserDTO, IUpdateUserDTO };
