import { CreateUserController } from "../CreateUsers/CreateUserController";
import { CreateUserUseCase } from "./CreateUserUseCase";
import { UserRepository } from "../../Repositories/implementations/UserRepository";

const userRepository = new UserRepository();
const createUserUseCase = new CreateUserUseCase(userRepository);
const createUserController = new CreateUserController(createUserUseCase);

export { createUserController };
