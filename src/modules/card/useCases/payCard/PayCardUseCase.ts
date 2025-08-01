import { AppError } from "../../../../errors/AppError";
import { prisma } from "../../../../prisma/client";

interface PayCardUseCaseRequest {
  cardId: string;
  payTotal?: boolean;
  amount: number;
}

export class PayCardUseCase {
  async execute({ cardId, payTotal, amount }: PayCardUseCaseRequest) {
    const card = await prisma.card.findUnique({
      where: { id: cardId },
      include: {
        user: true,
      },
    });

    if (!card) {
      throw new AppError("Cartão não encontrado", 404);
    }

    if (amount > card.invoiceAmount) {
      throw new AppError("Valor a ser pago maior que o limite do cartão", 400);
    }

    if (amount > card.creditLimit) {
      throw new AppError("Valor a ser pago maior que o limite do cartão", 400);
    }

    if (amount < 0) {
      throw new AppError("Valor a ser pago menor que 0", 400);
    }

    if (payTotal && amount !== card.invoiceAmount) {
      throw new AppError("Valor a ser pago diferente do limite do cartão", 400);
    }

    // if payTotal is true, set invoiceAmount to 0
    if (payTotal) {
      await prisma.card.update({
        where: { id: cardId },
        data: { invoiceAmount: 0 },
      });
    } else {
      await prisma.card.update({
        where: { id: cardId },
        data: { invoiceAmount: card.invoiceAmount - amount },
      });
    }

    await prisma.user.update({
      where: { id: card.user.id },
      data: {
        moneyAvailable: card.user.moneyAvailable - amount,
        totalMoney: card.user.totalMoney - amount,
      },
    });

    const cardPayment = await prisma.cardPayment.create({
      data: {
        cardId,
        amount,
        payedAt: new Date(),
      },
    });

    return {
      data: {
        cardId,
        paymentData: cardPayment,
      },
      message: "Cartão pago com sucesso",
    };
  }
}
