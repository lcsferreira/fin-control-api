import { Request, Response } from "express";
import { PayCardUseCase } from "./PayCardUseCase";

export class PayCardController {
  async handle(request: Request, response: Response) {
    const { cardId, payTotal, amount } = request.body;

    const payCardUseCase = new PayCardUseCase();

    const result = await payCardUseCase.execute({ cardId, payTotal, amount });

    return response.status(200).json(result);
  }
}
