import { AppError } from "../../../../errors/AppError";
import { prisma } from "../../../../prisma/client";

export class DeleteCardUseCase {
  async execute({
    userId,
    cardId,
  }: {
    userId: string;
    cardId: string;
  }): Promise<void> {
    const user = await prisma.user.findUnique({
      where: { id: userId },
    });

    if (!user) {
      throw new AppError("Usuário não encontrado", 404);
    }

    const card = await prisma.card.findUnique({
      where: { id: cardId },
      include: {
        user: true,
      },
    });

    if (!card) {
      throw new AppError("Cartão não encontrado", 404);
    }

    await prisma.card.delete({
      where: { id: cardId },
    });
  }
}
