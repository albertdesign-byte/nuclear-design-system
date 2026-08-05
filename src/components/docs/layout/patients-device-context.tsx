"use client";

import {
  createContext,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export type PatientsPreviewDevice = "mobile" | "desktop";

type PatientsDeviceContextValue = {
  device: PatientsPreviewDevice;
  setDevice: (device: PatientsPreviewDevice) => void;
};

const PatientsDeviceContext = createContext<PatientsDeviceContextValue | null>(
  null
);

export function PatientsDeviceProvider({ children }: { children: ReactNode }) {
  const [device, setDevice] = useState<PatientsPreviewDevice>("mobile");
  const value = useMemo(() => ({ device, setDevice }), [device]);

  return (
    <PatientsDeviceContext.Provider value={value}>
      {children}
    </PatientsDeviceContext.Provider>
  );
}

export function usePatientsDevice() {
  const context = useContext(PatientsDeviceContext);
  if (!context) {
    throw new Error("usePatientsDevice must be used within PatientsDeviceProvider");
  }
  return context;
}

export function usePatientsDeviceOptional() {
  return useContext(PatientsDeviceContext);
}
