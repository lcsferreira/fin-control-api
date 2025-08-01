// ... outros casos

import { InsertCardExpenseUseCase } from "../../card/useCases/insertCardExpense/InsertCardExpenseUseCase";
import { InsertExpenseByMethodController } from "./InsertExpenseByMethodController";

const strategyMap = {
  CREDIT_CARD: new InsertCardExpenseUseCase(),
  DEBIT_CARD: new InsertCardExpenseUseCase(), // ou outro caso, se lógica for diferente
  CASH: new InsertCardExpenseUseCase(),
  BANK_TRANSFER: new InsertCardExpenseUseCase(), // se for igual, pode reaproveitar
  PIX: new InsertCardExpenseUseCase(),
  OTHER: new InsertCardExpenseUseCase(),
};

const insertExpenseByMethodController = new InsertExpenseByMethodController(
  strategyMap
);

export { insertExpenseByMethodController };
