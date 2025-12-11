import { Payment } from "@/interface/table.interface";

export const transactionData: Payment[] = [
  {
    id: "728ed52f",
    amount: 100,
    status: "pending",
    email: "m@example.com",
  },
  {
    id: "839fa72b",
    amount: 250,
    status: "completed",
    email: "jane@example.com",
  },
  {
    id: "129ed55c",
    amount: 75,
    status: "failed",
    email: "john@example.com",
  },
];
