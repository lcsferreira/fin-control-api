import { prisma } from "../../../../prisma/client";
import { AppError } from "../../../../errors/AppError";
import { ExpenseType, PaymentMethod, ExpenseCategory } from "@prisma/client";
import { z } from "zod";

// model Expense {
//   id            String          @id @default(uuid())
//   name          String
//   amount        Float
//   type          ExpenseType
//   paymentMethod PaymentMethod
//   category      ExpenseCategory
//   description   String
//   date          DateTime
//   userId        String
//   user          User            @relation(fields: [userId], references: [id])
// }

// enum ExpenseType {
//   FIXED
//   VARIABLE
//   ONE_TIME
// }

// enum ExpenseCategory {
//   FOOD
//   SUBSCRIPTION
//   BILL
//   LOAN
//   LEISURE
//   HEALTH
//   GIFT
//   TRANSPORT
//   HOME
//   CLOTHES
//   OTHER_PERSONS
//   OTHER
// }

// enum PaymentMethod {
//   CREDIT_CARD
//   DEBIT_CARD
//   PIX
//   BANK_TRANSFER
//   CASH
//   OTHER
// }

interface InsertCardExpenseDTO {
  cardId: string;
  amount: number;
  type: ExpenseType;
  paymentMethod: PaymentMethod;
  category: ExpenseCategory;
  description: string;
  date: Date;
}

const insertCashExpenseSchema = z.object({
  cardId: z.uuid(),
  amount: z.number().positive(),
  type: z.enum(ExpenseType),
  paymentMethod: z.enum(PaymentMethod),
  category: z.enum(ExpenseCategory),
  description: z.string(),
  date: z.coerce.date(),
});

export class InsertCardExpenseUseCase {
  async execute(rawData: InsertCardExpenseDTO) {
    const data = insertCashExpenseSchema.parse(rawData);

    const card = await prisma.card.findUnique({
      where: { id: data.cardId },
      include: {
        user: true,
        payments: true,
      },
    });

    if (!card) {
      throw new AppError("Cartão não encontrado", 404);
    }

    if (
      data.paymentMethod !== PaymentMethod.CREDIT_CARD &&
      data.paymentMethod !== PaymentMethod.DEBIT_CARD
    ) {
      throw new AppError("Método de pagamento inválido", 400);
    }

    if (
      data.paymentMethod === PaymentMethod.CREDIT_CARD &&
      data.amount > card.creditLimit
    ) {
      throw new AppError("Limite de crédito excedido", 400);
    }

    if (
      data.paymentMethod === PaymentMethod.DEBIT_CARD &&
      data.amount > card.user.totalMoney
    ) {
      throw new AppError("Saldo insuficiente", 400);
    }

    if (data.paymentMethod === PaymentMethod.CREDIT_CARD) {
      await prisma.card.update({
        where: { id: card.id },
        data: {
          invoiceAmount: card.invoiceAmount + data.amount,
        },
      });
    }

    if (data.paymentMethod === PaymentMethod.DEBIT_CARD) {
      await prisma.user.update({
        where: { id: card.user.id },
        data: {
          moneyAvailable: card.user.moneyAvailable - data.amount,
          totalMoney: card.user.totalMoney - data.amount,
        },
      });
    }

    const expense = await prisma.expense.create({
      data: {
        name: "Compra no cartão",
        amount: data.amount,
        type: data.type,
        paymentMethod: data.paymentMethod,
        category: data.category,
        description: data.description,
        date: data.date,
        userId: card.user.id,
      },
    });

    return {
      message: "Despesa cadastrada com sucesso",
      expense: {
        id: expense.id,
        name: expense.name,
        amount: expense.amount,
        type: expense.type,
        paymentMethod: expense.paymentMethod,
        category: expense.category,
        description: expense.description,
        date: expense.date,
      },
    };
  }
}
