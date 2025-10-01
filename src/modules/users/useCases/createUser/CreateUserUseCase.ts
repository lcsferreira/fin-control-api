import { User } from "@prisma/client";
import { prisma } from "../../../../prisma/client";
import { CreateUserDTO } from "../../dtos/CreateUserDTO";
import { AppError } from "../../../../errors/AppError";

export class CreateUserUseCase {
  async execute({
    name,
    totalMoney,
    moneyAvailable,
  }: CreateUserDTO): Promise<User> {
    // Regras de negócio
    // Se o usuário já existe
    if (!name) {
      throw new AppError("Nome do usuário não pode ser vazio", 400);
    }

    if (!totalMoney) {
      throw new AppError("Saldo total não pode ser vazio", 400);
    }

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
        moneyAvailable: moneyAvailable || 0,
      },
    });

    return user;
  }
}
