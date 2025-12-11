export type Payment = {
  id: string;
  amount: number;
  status: "pending" | "processing" | "success" | "failed" | "completed";
  email: string;
};

export type Info = {
  status: string;
  role: string;
  yearsOfExperience: number;
  department: string;
  location: string;
};

export type User = {
  id: number;
  name: string;
  email: string;
  status?: string;
  info: Info;
};

// Global Column Types
export type ColumnOverride<T> = {
  [K in keyof T]?: {
    header?: string;
    cell?: (row: T) => React.ReactNode;
  };
};
