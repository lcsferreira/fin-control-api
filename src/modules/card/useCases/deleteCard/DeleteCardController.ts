import { Request, Response } from "express";
import { DeleteCardUseCase } from "./DeleteCardUseCase";

export class DeleteCardController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { userId, cardId } = request.params;

    const deleteCardUseCase = new DeleteCardUseCase();

    await deleteCardUseCase.execute({
      userId,
      cardId,
    });

    return response
      .status(201)
      .json({ message: "Cartão deletado com sucesso" });
  }
}
