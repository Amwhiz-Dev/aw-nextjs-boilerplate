"use client";

import {
  ReactNode,
  createContext,
  useContext,
  useState,
  useCallback,
} from "react";

type PermissionContextType = {
  permissions: string[];
  setPermissions: (perms: string[]) => void;
  hasPermission: (perm: string) => boolean;
};

const PermissionContext = createContext<PermissionContextType | undefined>(
  undefined
);

export const PermissionProvider = ({ children }: { children: ReactNode }) => {
  const [permissions, setPermissions] = useState<string[]>([]);

  // Helper to check permission
  const hasPermission = useCallback(
    (perm: string) => permissions.includes(perm),
    [permissions]
  );

  return (
    <PermissionContext.Provider
      value={{ permissions, setPermissions, hasPermission }}
    >
      {children}
    </PermissionContext.Provider>
  );
};

export const usePermission = (): PermissionContextType => {
  const context = useContext(PermissionContext);
  if (!context)
    throw new Error("usePermission must be used within PermissionProvider");
  return context;
};
