import { Card } from "@prisma/client";

export type UserCardDTO = Omit<
  Card,
  "userId" | "invoiceAmount" | "creditLimit" | "dueDate" | "invoiceClosingDay"
>;

export interface UserDTO {
  id: string;
  name: string;
  totalMoney: number;
  familyId: string | null;
  cards: UserCardDTO[];
}
