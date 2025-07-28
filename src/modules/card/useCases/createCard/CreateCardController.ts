import { Request, Response } from "express";
import { CreateCardUseCase } from "./CreateCardUseCase";

export class CreateCardController {
  async handle(request: Request, response: Response): Promise<Response> {
    const {
      name,
      lastFourNumbers,
      invoiceClosingDay,
      invoiceAmount,
      creditLimit,
      dueDate,
    } = request.body;
    const { userId } = request.params;

    const createCardUseCase = new CreateCardUseCase();

    const result = await createCardUseCase.execute({
      name,
      lastFourNumbers,
      invoiceClosingDay,
      invoiceAmount,
      creditLimit,
      dueDate,
      userId,
    });

    return response.status(201).json(result);
  }
}
