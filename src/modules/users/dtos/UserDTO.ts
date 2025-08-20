import { Card, Expense } from "@prisma/client";

export type UserCardDTO = Omit<
  Card,
  "userId" | "invoiceAmount" | "creditLimit" | "dueDate" | "invoiceClosingDay"
>;

export type UserExpenseDTO = Omit<Expense, "userId">;

export interface UserDTO {
  id: string;
  name: string;
  totalMoney: number;
  moneyAvailable: number;
  familyId: string | null;
  cards: UserCardDTO[];
  expenses: UserExpenseDTO[];
}
