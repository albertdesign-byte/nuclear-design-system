"use client";

import { usePathname } from "next/navigation";
import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

type UserflowLayoutContextValue = {
  /** Sidebar visible — "Contraer" layout (default). */
  sidebarVisible: boolean;
  setSidebarVisible: (visible: boolean) => void;
  toggleSidebarVisible: () => void;
};

const UserflowLayoutContext = createContext<UserflowLayoutContextValue | null>(null);

export function UserflowLayoutProvider({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const isUserflow = pathname.startsWith("/docs/userflow");
  const [sidebarVisible, setSidebarVisible] = useState(true);

  useEffect(() => {
    if (!isUserflow) {
      setSidebarVisible(true);
    }
  }, [isUserflow]);

  const value = useMemo(
    () => ({
      sidebarVisible,
      setSidebarVisible,
      toggleSidebarVisible: () => setSidebarVisible((current) => !current),
    }),
    [sidebarVisible]
  );

  return (
    <UserflowLayoutContext.Provider value={value}>
      {children}
    </UserflowLayoutContext.Provider>
  );
}

export function useUserflowLayout() {
  const context = useContext(UserflowLayoutContext);
  if (!context) {
    throw new Error("useUserflowLayout must be used within UserflowLayoutProvider");
  }
  return context;
}

export function useUserflowLayoutOptional() {
  return useContext(UserflowLayoutContext);
}
