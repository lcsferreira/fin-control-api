export interface CreateCardDTO {
  name: string;
  lastFourNumbers: string;
  invoiceClosingDay: number;
  invoiceAmount: number;
  creditLimit: number;
  dueDate: number;
  userId: string;
}
