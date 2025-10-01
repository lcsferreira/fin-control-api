import { AppError } from "../../../../errors/AppError";
import { prisma } from "../../../../prisma/client";
import { FamilyDTO } from "../../dtos/FamilyDTO";

export class AddUserInFamilyUseCase {
  async execute({
    name,
    userId,
    familyId,
  }: {
    name: string;
    userId: string;
    familyId: string;
  }): Promise<FamilyDTO> {
    const user = await prisma.user.findUnique({
      where: { id: userId },
    });

    if (!user) {
      throw new AppError("Usuário não encontrado", 404);
    }

    const familyAlreadyExists = await prisma.family.findUnique({
      where: { id: familyId },
    });

    if (!familyAlreadyExists) {
      throw new AppError("Família não encontrada", 404);
    }

    if (user.familyId) {
      throw new AppError("Usuário já está em uma família", 400);
    }

    const family = await prisma.family.update({
      where: { id: familyId },
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
        familyId: user.familyId || null,
      })),
    };

    return familyDTO;
  }
}
