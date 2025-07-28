import { Request, Response } from "express";
import { ResetPasswordUseCase } from "./ResetPasswordUseCase";

export class ResetPasswordController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { token, password, confirmPassword } = request.body;

    const resetPassword = new ResetPasswordUseCase();

    const result = await resetPassword.execute(
      token,
      password,
      confirmPassword
    );

    return response.status(200).json({ result });
  }
}
