import { Request, Response } from "express";
import { GetAllUserCardsUseCase } from "./getAllUserCardsUseCase";

export class GetAllUserCardsController {
  async handle(request: Request, response: Response) {
    const { userId } = request.params;

    const getAllUserCardsUseCase = new GetAllUserCardsUseCase();

    const cards = await getAllUserCardsUseCase.execute(userId);

    return response.status(200).json(cards);
  }
}
