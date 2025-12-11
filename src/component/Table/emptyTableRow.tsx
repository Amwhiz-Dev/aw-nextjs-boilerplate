import { TableRow, TableCell } from "@/ui/table";

interface EmptyTableRowProps {
  colSpan: number;
  message?: string;
}

export function EmptyTableRow({
  colSpan,
  message = "No results.",
}: EmptyTableRowProps) {
  return (
    <TableCell colSpan={colSpan} className="p-4">
      <div className="w-full flex justify-center items-center">
        <span className="text-muted-foreground">{message}</span>
      </div>
    </TableCell>
  );
}
