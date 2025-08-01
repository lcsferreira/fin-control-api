-- CreateTable
CREATE TABLE "CardPayment" (
    "id" TEXT NOT NULL,
    "cardId" TEXT NOT NULL,
    "amount" DOUBLE PRECISION NOT NULL,
    "payedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CardPayment_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "CardPayment" ADD CONSTRAINT "CardPayment_cardId_fkey" FOREIGN KEY ("cardId") REFERENCES "Card"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
