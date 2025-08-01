import { prisma } from "../../../../prisma/client";
import { CardDTO } from "../../dtos/CardDTO";
import { AppError } from "../../../../errors/AppError";

export class GetAllUserCardsUseCase {
  async execute(userId: string): Promise<CardDTO[]> {
    const cards = await prisma.card.findMany({
      where: { userId },
    });

    if (cards.length === 0) {
      throw new AppError("Nenhum cartão encontrado", 404);
    }

    const cardsDTO: CardDTO[] = cards.map((card) => ({
      id: card.id,
      name: card.name,
      lastFourNumbers: card.lastFourNumbers,
      invoiceClosingDay: card.invoiceClosingDay,
      invoiceAmount: card.invoiceAmount,
    }));

    return cardsDTO;
  }
}
