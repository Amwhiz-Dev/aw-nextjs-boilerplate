import { ColumnOverride } from "@/interface/table.interface";
import { ColumnDef } from "@tanstack/react-table";

export function generateColumns<T extends object>(
  data: T[],
  overrides: ColumnOverride<T> = {}
): ColumnDef<T>[] {
  if (!data.length) return [];

  return Object.keys(data[0]).map((key) => {
    const k = key as keyof T;

    return {
      accessorKey: key,
      header: overrides[k]?.header || key.toString().toUpperCase(),
      cell: ({ row }) => {
        const value = row.getValue(key);

        // If override cell exists → use it
        if (overrides[k]?.cell) {
          return overrides[k]!.cell(row.original);
        }

        // Default formatting
        if (typeof value === "number") return value;
        if (!value) return "-";

        return <span>{String(value)}</span>;
      },
    } as ColumnDef<T>;
  });
}
