import { User } from "@prisma/client";
import { prisma } from "../../../../prisma/client";
import { CreateUserDTO } from "../../dtos/CreateUserDTO";
import { AppError } from "../../../../errors/AppError";

export class CreateUserUseCase {
  async execute({ name, totalMoney }: CreateUserDTO): Promise<User> {
    // Regras de negócio
    // Se o usuário já existe
    const userAlreadyExists = await prisma.user.findFirst({
      where: {
        name,
      },
    });

    const validTotalMoney = totalMoney > 0;

    if (!validTotalMoney) {
      throw new AppError("saldo total inválido", 400);
    }

    if (userAlreadyExists) {
      throw new AppError("usuário já existe", 409);
    }

    //criar usuário
    const user = await prisma.user.create({
      data: {
        name,
        totalMoney,
      },
    });

    return user;
  }
}
