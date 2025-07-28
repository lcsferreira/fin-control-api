import { Request, Response } from "express";
import { CreateUserUseCase } from "./CreateUserUseCase";

export class CreateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, totalMoney } = request.body;

    const createUserUseCase = new CreateUserUseCase();

    const result = await createUserUseCase.execute({
      name,
      totalMoney,
    });

    return response.status(201).json(result);
  }
}
