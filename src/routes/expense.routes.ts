import { Router } from "express";
import { insertExpenseByMethodController } from "../modules/expenses/useCases/InsertExpenseByMethodUseCase";

const expenseRoutes = Router();

expenseRoutes.post(
  "/paymentMethod/:method",
  insertExpenseByMethodController.handle
);

export { expenseRoutes };
