import { Request, Response } from "express";
import { CreateFamilyUseCase } from "./CreateFamilyUseCase";

export class CreateFamilyController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name } = request.body;
    const { userId } = request.params;

    const createFamilyUseCase = new CreateFamilyUseCase();

    const result = await createFamilyUseCase.execute({ name, userId });

    return response.status(201).json(result);
  }
}
