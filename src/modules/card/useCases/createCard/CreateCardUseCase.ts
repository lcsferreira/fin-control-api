import { Card } from "@prisma/client";
import { prisma } from "../../../../prisma/client";
import { CreateCardDTO } from "../../dtos/CreateCardDTO";
import { AppError } from "../../../../errors/AppError";

export class CreateCardUseCase {
  async execute({
    name,
    lastFourNumbers,
    invoiceClosingDay,
    invoiceAmount,
    creditLimit,
    dueDate,
    userId,
  }: CreateCardDTO): Promise<Card> {
    const user = await prisma.user.findUnique({
      where: {
        id: userId,
      },
    });

    if (!user) {
      throw new AppError("usuário não encontrado", 404);
    }

    const cardAlreadyExists = await prisma.card.findFirst({
      where: {
        lastFourNumbers,
      },
    });

    const validLastFourNumbers =
      lastFourNumbers.length === 4 && lastFourNumbers.match(/^\d{4}$/);
    const validInvoiceClosingDay =
      invoiceClosingDay >= 1 && invoiceClosingDay <= 31;
    const validDueDate = dueDate >= 1 && dueDate <= 31;
    const validInvoiceAmount = invoiceAmount > 0;
    const validCreditLimit = creditLimit > 0;

    if (!validLastFourNumbers) {
      throw new AppError("últimos 4 dígitos inválidos", 400);
    }

    if (!validInvoiceClosingDay) {
      throw new AppError("dia de fechamento da fatura inválido", 400);
    }

    if (!validDueDate) {
      throw new AppError("data de vencimento inválida", 400);
    }

    if (!validInvoiceAmount) {
      throw new AppError("valor da fatura inválido", 400);
    }

    if (!validCreditLimit) {
      throw new AppError("limite de crédito inválido", 400);
    }

    if (cardAlreadyExists) {
      throw new AppError("cartão já existe", 409);
    }

    const cardData = {
      name,
      lastFourNumbers,
      invoiceClosingDay,
      invoiceAmount,
      creditLimit,
      dueDate,
      userId,
    };

    //criar cartão
    const card = await prisma.card.create({
      data: cardData,
    });

    return card;
  }
}
