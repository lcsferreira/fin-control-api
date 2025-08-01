import { Request, Response } from "express";
import { AppError } from "../../../errors/AppError";
import { PaymentMethod } from "@prisma/client";

export class InsertExpenseByMethodController {
  constructor(
    private strategyMap: Record<
      PaymentMethod,
      { execute: (data: any) => Promise<any> }
    >
  ) {}

  async handle(req: Request, res: Response) {
    const { method } = req.params;

    const paymentMethod = method.toUpperCase() as PaymentMethod;

    const strategy = this.strategyMap[paymentMethod];

    if (!strategy) {
      throw new AppError("Método de pagamento não suportado", 400);
    }

    const result = await strategy.execute(req.body);

    return res.status(201).json(result);
  }
}
