import { Request, Response } from "express";
import { GetCardDetailsUseCase } from "./getCardDetailsUseCase";

export class GetCardDetailsController {
  async handle(request: Request, response: Response) {
    const { cardId } = request.params;

    const getCardDetailsUseCase = new GetCardDetailsUseCase();

    const cardDetails = await getCardDetailsUseCase.execute(cardId);

    return response.status(200).json(cardDetails);
  }
}
