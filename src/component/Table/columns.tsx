"use client";

import { Payment, User } from "@/interface/table.interface";
import { Button } from "@/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/ui/dropdown-menu";
import { getInitials } from "@/utils/getInitials";
import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal } from "lucide-react";

export const transactionColumns: ColumnDef<Payment>[] = [
  {
    accessorKey: "status",
    header: "Status",
  },
  {
    accessorKey: "email",
    header: () => <div>Email</div>,
    cell: ({ renderValue }) => {
      return <div>{renderValue<string>()}</div>;
    },
  },
  {
    accessorKey: "amount",
    header: () => <div className="text-right">Amount</div>,
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("amount"));
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(amount);

      return <div className="text-right font-medium">{formatted || "-"}</div>;
    },
  },
  {
    accessorKey: "",
    header: () => <div>Action</div>,
    id: "actions",
    cell: ({ row }) => {
      const payment = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              {/* <span className="sr-only">Open menu</span> */}
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(payment.id)}
            >
              Copy payment ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View customer</DropdownMenuItem>
            <DropdownMenuItem>View payment details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];

export const userColumns: ColumnDef<User>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "name",
    header: "Name",
    cell: ({ row }) => {
      const user = row.original;
      const initials = getInitials(user.name);

      return (
        <div className="flex items-center gap-2">
          <div className="dp w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center font-bold text-sm">
            {initials}
          </div>
          <div className="text-blue-600 hover:underline">{user.name}</div>
        </div>
      );
    },
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorFn: (row) => row.info.status,
    id: "status",
    header: "Status",
  },
  {
    accessorFn: (row) => row.info.role,
    id: "role",
    header: "Role",
  },
  {
    accessorFn: (row) => row.info.yearsOfExperience,
    id: "experience",
    header: "Years Exp",
  },
  {
    accessorFn: (row) => row.info.department,
    id: "department",
    header: "Department",
  },
  {
    accessorFn: (row) => row.info.location,
    id: "location",
    header: "Location",
  },
];
