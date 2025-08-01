import { Request, Response } from "express";
import { InsertCardExpenseUseCase } from "./InsertCardExpenseUseCase";

export class InsertCardExpenseController {
  async handle(request: Request, response: Response) {
    const { cardId, amount, type, paymentMethod, category, description, date } =
      request.body;

    const insertCardExpenseUseCase = new InsertCardExpenseUseCase();
    const expense = await insertCardExpenseUseCase.execute({
      cardId,
      amount,
      type,
      paymentMethod,
      category,
      description,
      date,
    });
    return response.status(201).json(expense);
  }
}
