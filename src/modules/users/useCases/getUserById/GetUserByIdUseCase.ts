import { prisma } from "../../../../prisma/client";
import { AppError } from "../../../../errors/AppError";
import { UserDTO } from "../../dtos/UserDTO";

export class GetUserByIdUseCase {
  async execute(id: string): Promise<UserDTO> {
    const user = await prisma.user.findUnique({
      where: {
        id,
      },
      include: {
        cards: true,
      },
    });

    if (!user) {
      throw new AppError("User not found");
    }

    const userDTO: UserDTO = {
      id: user.id,
      name: user.name,
      totalMoney: user.totalMoney,
      familyId: user.familyId,
      cards: user.cards.map((card) => ({
        id: card.id,
        name: card.name,
        lastFourNumbers: card.lastFourNumbers,
      })),
    };

    return userDTO;
  }
}
