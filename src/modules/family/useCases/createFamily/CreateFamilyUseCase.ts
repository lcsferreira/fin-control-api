import { AppError } from "../../../../errors/AppError";
import { prisma } from "../../../../prisma/client";
import { FamilyDTO } from "../../dtos/FamilyDTO";

export class CreateFamilyUseCase {
  async execute({
    name,
    userId,
  }: {
    name: string;
    userId: string;
  }): Promise<FamilyDTO> {
    const user = await prisma.user.findUnique({
      where: { id: userId },
    });

    if (!user) {
      throw new AppError("Usuário não encontrado", 404);
    }

    if (user.familyId) {
      throw new AppError("Usuário já está em uma família", 400);
    }

    const family = await prisma.family.create({
      data: { name, users: { connect: { id: userId } } },
      include: {
        users: {
          include: {
            cards: true,
          },
        },
      },
    });

    const familyDTO: FamilyDTO = {
      id: family.id,
      name: family.name,
      users: family.users.map((user) => ({
        id: user.id,
        name: user.name,
        totalMoney: user.totalMoney,
        familyId: user.familyId,
        cards: user.cards.map((card) => ({
          id: card.id,
          name: card.name,
          lastFourNumbers: card.lastFourNumbers,
        })),
      })),
    };

    return familyDTO;
  }
}
