import {
  IUserRepository,
  ICreateUserDTO,
  IUpdateUserDTO,
} from "../IUserRepository";
import { prismaClientDataBase } from "../../Database/prisma";
import { Users } from "@prisma/client";

class UserRepository implements IUserRepository {
  private prisma = prismaClientDataBase;

  async create({ name, email, phone, city }: ICreateUserDTO): Promise<void> {
    await this.prisma.users.create({
      data: {
        name,
        email,
        phone,
        city,
      },
    });
  }

  async list(): Promise<Users[]> {
    return this.prisma.users.findMany();
  }

  async update({
    id,
    name,
    email,
    phone,
    city,
  }: IUpdateUserDTO): Promise<void> {
    await this.prisma.users.update({
      where: {
        id,
      },
      data: {
        name,
        email,
        phone,
        city,
      },
    });
  }

  async delete(id: string): Promise<void> {
    await this.prisma.users.delete({
      where: {
        id,
      },
    });
  }
}
export { UserRepository };
