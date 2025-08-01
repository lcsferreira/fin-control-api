import { prisma } from "../../../../prisma/client";
import { AppError } from "../../../../errors/AppError";
import { UserDTO } from "../../dtos/UserDTO";

export class GetAllUsersUseCase {
  async execute(): Promise<UserDTO[]> {
    const users = await prisma.user.findMany({
      include: {
        cards: true,
        expenses: true,
        incomes: true,
        savings: true,
      },
    });

    if (users.length === 0) {
      throw new AppError("Users not found");
    }

    const usersDTO: UserDTO[] = users.map((user) => ({
      id: user.id,
      name: user.name,
      totalMoney: user.totalMoney,
      moneyAvailable: user.moneyAvailable,
      familyId: user.familyId,
      cards: user.cards.map((card) => ({
        id: card.id,
        name: card.name,
        lastFourNumbers: card.lastFourNumbers,
      })),
    }));

    return usersDTO;
  }
}
