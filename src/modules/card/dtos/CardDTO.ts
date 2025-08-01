export interface CardDTO {
  id: string;
  name: string;
  lastFourNumbers: string;
  invoiceClosingDay: number;
  invoiceAmount: number;
}

export interface CardDetailsDTO {
  id: string;
  name: string;
  lastFourNumbers: string;
  invoiceClosingDay: number;
  invoiceAmount: number;
  creditLimit: number;
  dueDate: number;
  payments: CardPaymentDTO[];
}

export interface CardPaymentDTO {
  id: string;
  amount: number;
  payedAt: Date;
}
