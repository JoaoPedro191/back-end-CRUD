import { ListUsersController } from "./ListUsersController";
import { ListUsersUseCase } from "./ListUsersUseCase";
import { UserRepository } from "../../Repositories/implementations/UserRepository";

const userRepository = new UserRepository();
const listUserUseCase = new ListUsersUseCase(userRepository);
const listUsersController = new ListUsersController(listUserUseCase);

export { listUsersController };
