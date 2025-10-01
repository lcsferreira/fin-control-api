import { Request, Response } from "express";
import { AddUserInFamilyUseCase } from "./AddUserInFamilyUseCase";

export class AddUserInFamilyController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { userId, familyId } = request.params;
    const { name } = request.body;

    const addUserInFamilyUseCase = new AddUserInFamilyUseCase();

    const result = await addUserInFamilyUseCase.execute({
      name,
      userId,
      familyId,
    });

    return response.status(200).json(result);
  }
}
