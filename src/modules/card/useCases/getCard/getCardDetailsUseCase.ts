import { prisma } from "../../../../prisma/client";
import { CardDetailsDTO } from "../../dtos/CardDTO";
import { AppError } from "../../../../errors/AppError";
export class GetCardDetailsUseCase {
  async execute(cardId: string): Promise<CardDetailsDTO> {
    const card = await prisma.card.findUnique({
      where: { id: cardId },
      include: {
        payments: true,
      },
    });

    if (!card) {
      throw new AppError("Cartão não encontrado", 404);
    }

    const cardDetailsDTO: CardDetailsDTO = {
      id: card.id,
      name: card.name,
      lastFourNumbers: card.lastFourNumbers,
      invoiceClosingDay: card.invoiceClosingDay,
      invoiceAmount: card.invoiceAmount,
      creditLimit: card.creditLimit,
      dueDate: card.dueDate,
      payments: card.payments.map((payment) => ({
        id: payment.id,
        amount: payment.amount,
        payedAt: payment.payedAt,
      })),
    };

    return cardDetailsDTO;
  }
}
