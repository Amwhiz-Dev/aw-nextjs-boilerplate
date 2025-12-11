"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import { usePathname, useRouter } from "next/navigation";

interface User {
  id?: string;
  name: string;
  email: string;
  role?: string;
}

interface AuthContextType {
  user: User | null;
  token: string | null;
  login: (token: string, userData: User) => void;
  logout: () => void;
  setUser: (user: User | null) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  // ⭐ Load instantly (NO useEffect)
  const [user, setUser] = useState<User | null>(() => {
    const savedUser = localStorage.getItem("auth_user");
    return savedUser ? JSON.parse(savedUser) : null;
  });

  const [token, setToken] = useState<string | null>(() =>
    localStorage.getItem("auth_token")
  );

  const [justLoggedOut, setJustLoggedOut] = useState(false);

  const pathname = usePathname();
  const router = useRouter();

  const publicRoutes = ["/login", "/signup"];

  // ⭐ Redirect logic — now NO flicker, no double redirect
  useEffect(() => {
    if (!pathname) return; // Skip if pathname is null or undefined

    const loggedIn = !!token;

    if (justLoggedOut) return;

    // Logged in → trying to access login/signup
    if (loggedIn && publicRoutes.includes(pathname)) {
      router.replace("/dashboard");
      return;
    }

    // Not logged in → trying to access protected page
    if (!loggedIn && !publicRoutes.includes(pathname)) {
      router.replace("/login");
      return;
    }
  }, [token, pathname, justLoggedOut]);

  const login = (token: string, userData: User) => {
    setToken(token);
    setUser(userData);

    localStorage.setItem("auth_token", token);
    localStorage.setItem("auth_user", JSON.stringify(userData));

    router.replace("/dashboard");
  };

  const logout = () => {
    setJustLoggedOut(true);

    setToken(null);
    setUser(null);

    localStorage.removeItem("auth_token");
    localStorage.removeItem("auth_user");

    router.replace("/login");

    setTimeout(() => setJustLoggedOut(false), 300);
  };

  return (
    <AuthContext.Provider value={{ user, token, setUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used inside AuthProvider");
  return ctx;
};
